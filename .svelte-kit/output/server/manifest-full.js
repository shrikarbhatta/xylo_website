export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","app.css","assets/images/explore.png","assets/images/explore2.png","assets/images/favicon.ico","assets/images/grouppicxylo.JPG","assets/images/inventory.jpg","assets/images/xylo-logo.png","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".JPG":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.SyuoY8Pj.js","app":"_app/immutable/entry/app.BJygR3_p.js","imports":["_app/immutable/entry/start.SyuoY8Pj.js","_app/immutable/chunks/entry.C8dDGlEr.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BJygR3_p.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.6INTIwr2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
