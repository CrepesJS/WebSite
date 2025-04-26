const h = "modulepreload",
	E = function (c) {
		return "/" + c;
	},
	d = {},
	b = function (m, a, v) {
		let i = Promise.resolve();
		if (a && a.length > 0) {
			let n = function (e) {
				return Promise.all(
					e.map((o) =>
						Promise.resolve(o).then(
							(s) => ({ status: "fulfilled", value: s }),
							(s) => ({ status: "rejected", reason: s }),
						),
					),
				);
			};
			document.getElementsByTagName("link");
			const t = document.querySelector("meta[property=csp-nonce]"),
				u = t?.nonce || t?.getAttribute("nonce");
			i = n(
				a.map((e) => {
					if (((e = E(e)), e in d)) return;
					d[e] = !0;
					const o = e.endsWith(".css"),
						s = o ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${s}`)) return;
					const r = document.createElement("link");
					if (
						((r.rel = o ? "stylesheet" : h),
						o || (r.as = "script"),
						(r.crossOrigin = ""),
						(r.href = e),
						u && r.setAttribute("nonce", u),
						document.head.appendChild(r),
						o)
					)
						return new Promise((p, f) => {
							r.addEventListener("load", p),
								r.addEventListener("error", () =>
									f(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		function l(n) {
			const t = new Event("vite:preloadError", { cancelable: !0 });
			if (((t.payload = n), window.dispatchEvent(t), !t.defaultPrevented))
				throw n;
		}
		return i.then((n) => {
			for (const t of n || []) t.status === "rejected" && l(t.reason);
			return m().catch(l);
		});
	};
(
	await b(async () => {
		const { initializeApp: c } = await import("./index.esm.C__3h2no.js");
		return { initializeApp: c };
	}, [])
).initializeApp({
	apiKey: "AIzaSyCCtwe3PjtMkftqCgc0GC2k3cbKb9vYdGk",
	authDomain: "crepesjs-com.firebaseapp.com",
	databaseURL: "https://crepesjs-com.firebaseio.com",
	projectId: "crepesjs-com",
	storageBucket: "crepesjs-com.appspot.com",
	messagingSenderId: "451350706276",
	appId: "1:451350706276:web:b8dcaa0d46ce2aca058771",
	measurementId: "G-9E2P7HPRNM",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang._JsPh-kF.js.map
