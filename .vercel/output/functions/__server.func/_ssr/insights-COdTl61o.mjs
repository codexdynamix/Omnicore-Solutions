import { o as insights } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MediaImage } from "./media-image-CBZ6vyt4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-COdTl61o.js
var import_jsx_runtime = require_jsx_runtime();
function InsightsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "Insights"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "ROI, not spec sheets."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "How to choose wet or dry hire, when a mill pays, and what to have on site before the rains."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: insights.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/insights/$slug",
					params: { slug: post.slug },
					className: "group overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
						src: post.image,
						alt: post.imageAlt,
						className: "aspect-16/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									post.category,
									" · ",
									post.read,
									" · ",
									post.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-2xl font-semibold tracking-tight group-hover:text-accent",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: post.description
							})
						]
					})]
				}, post.slug))
			})
		]
	});
}
//#endregion
export { InsightsIndex as component };
