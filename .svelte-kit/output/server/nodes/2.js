

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C0ehF_Qm.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DFTQtrJW.js"];
export const stylesheets = [];
export const fonts = [];
