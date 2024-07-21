const u = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	i = {},
	h = function (l, c, b) {
		let a = Promise.resolve();
		if (c && c.length > 0) {
			document.getElementsByTagName("link");
			const n = document.querySelector("meta[property=csp-nonce]"),
				r = n?.nonce || n?.getAttribute("nonce");
			a = Promise.all(
				c.map((e) => {
					if (((e = f(e)), e in i)) return;
					i[e] = !0;
					const s = e.endsWith(".css"),
						m = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${m}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = s ? "stylesheet" : u),
						s || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						r && t.setAttribute("nonce", r),
						document.head.appendChild(t),
						s)
					)
						return new Promise((p, d) => {
							t.addEventListener("load", p),
								t.addEventListener("error", () =>
									d(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return a
			.then(() => l())
			.catch((n) => {
				const r = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((r.payload = n),
					window.dispatchEvent(r),
					!r.defaultPrevented)
				)
					throw n;
			});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.CQlgJgN2.js");
		return { initializeApp: o };
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
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.iDKyf7Nh.js.map
