/* Loads the browser data.js into Node so pages can be pre-rendered from it. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const src = fs.readFileSync(path.join(__dirname, "..", "assets", "js", "data.js"), "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(src, ctx);
module.exports = { COURSE: ctx.window.MINDIFY_COURSE, TESTIMONIALS: ctx.window.MINDIFY_TESTIMONIALS };
