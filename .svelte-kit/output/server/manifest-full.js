export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/images/explore.png","assets/images/explore2.png","assets/images/favicon.ico","assets/images/grouppicxylo.JPG","assets/images/inventory.jpg","assets/images/xylo-logo.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".JPG":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DkcWfYmV.js","app":"_app/immutable/entry/app.BDxjsQLW.js","imports":["_app/immutable/entry/start.DkcWfYmV.js","_app/immutable/chunks/entry.CDS1s_j7.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.BDxjsQLW.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.TKqTHv1e.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
