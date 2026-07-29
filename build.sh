#!/usr/bin/env bash
# Netlify build step.
#  1. Regenerates the static HTML from tools/ templates
#  2. Injects Supabase credentials from Netlify environment variables
# If SUPABASE_URL / SUPABASE_ANON_KEY are not set, the site builds in demo mode.
set -euo pipefail

echo "→ Building pages…"
node tools/build-pages.js
node tools/build-portal.js

echo "→ Writing assets/js/config.js…"
cat > assets/js/config.js <<CONFIG
/* AUTO-GENERATED AT BUILD TIME BY build.sh — do not edit by hand.
   The copy in git is the local/demo default. On Netlify, build.sh overwrites it
   using the SUPABASE_URL and SUPABASE_ANON_KEY environment variables. */
window.MINDIFY_CONFIG = {
  supabaseUrl: "${SUPABASE_URL:-}",
  supabaseAnonKey: "${SUPABASE_ANON_KEY:-}",
  siteName: "Mindify",
  contactEmail: "${CONTACT_EMAIL:-hello@mindify.co.uk}"
};
CONFIG

if [ -n "${SUPABASE_URL:-}" ]; then
  echo "✓ Supabase configured — live accounts enabled."
else
  echo "⚠ SUPABASE_URL not set — site will run in DEMO MODE (localStorage accounts)."
fi
echo "✓ Build complete."
