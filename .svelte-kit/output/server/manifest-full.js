export const manifest = {
	appDir: "_app",
	appPath: "xylo_website/_app",
	assets: new Set([".nojekyll","assets/images/._xylo-logo.png","assets/images/explore.png","assets/images/explore2.png","assets/images/favicon.ico","assets/images/grouppicxylo.JPG","assets/images/inventory.jpg","assets/images/xylo-logo.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".JPG":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-47b19c62.js","imports":["_app/immutable/start-47b19c62.js","_app/immutable/chunks/index-d758d2a6.js","_app/immutable/chunks/singletons-23874a92.js","_app/immutable/chunks/paths-e5db1f1c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/clients",
				pattern: /^\/clients\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact_us",
				pattern: /^\/contact_us\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
