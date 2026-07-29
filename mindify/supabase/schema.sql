-- ============================================================================
-- Mindify — Supabase schema
-- Run this once in Supabase → SQL Editor → New query → Run.
-- Safe to re-run: everything is IF NOT EXISTS / CREATE OR REPLACE.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. Profiles — one row per student, mirrors auth.users
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  email       text,
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles: read own" on public.profiles;
create policy "profiles: read own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Auto-create a profile row whenever someone signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 2. Progress — one row per (student, course, module) marked complete
-- ---------------------------------------------------------------------------
create table if not exists public.progress (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  course_slug  text not null default 'therapeutic-parenting',
  module_no    int  not null check (module_no between 1 and 24),
  completed_at timestamptz not null default now(),
  unique (user_id, course_slug, module_no)
);

create index if not exists progress_user_idx on public.progress (user_id, course_slug);

alter table public.progress enable row level security;

-- A student can only ever see or touch their own rows.
drop policy if exists "progress: read own" on public.progress;
create policy "progress: read own" on public.progress
  for select using (auth.uid() = user_id);

drop policy if exists "progress: insert own" on public.progress;
create policy "progress: insert own" on public.progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "progress: update own" on public.progress;
create policy "progress: update own" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "progress: delete own" on public.progress;
create policy "progress: delete own" on public.progress
  for delete using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 3. Admin view — SERVICE ROLE ONLY
--
-- IMPORTANT: this is created with security_invoker = true and access is revoked
-- from anon/authenticated. Without both of those, a plain view in the public
-- schema runs as its owner and bypasses the row-level security above — meaning
-- anyone holding the (deliberately public) anon key could read the whole
-- student roster over the REST API. Do not remove either line.
-- ---------------------------------------------------------------------------
drop view if exists public.student_overview;
create view public.student_overview
with (security_invoker = true) as
select
  p.id,
  p.full_name,
  p.email,
  p.created_at,
  count(pr.module_no) as modules_complete,
  (count(pr.module_no) = 6) as certificate_earned,
  max(pr.completed_at) as last_activity
from public.profiles p
left join public.progress pr
  on pr.user_id = p.id and pr.course_slug = 'therapeutic-parenting'
group by p.id, p.full_name, p.email, p.created_at;

revoke all on public.student_overview from anon, authenticated;
-- Query it from the Supabase SQL editor or with the service_role key only.
