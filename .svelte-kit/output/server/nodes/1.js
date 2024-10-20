

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ls-RyyZF.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.TKqTHv1e.js","_app/immutable/chunks/entry.CDS1s_j7.js"];
export const stylesheets = [];
export const fonts = [];
