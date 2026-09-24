import { l as services } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MediaImage } from "./media-image-CBZ6vyt4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DaAehb59.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "Services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Five lines. One WhatsApp number."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "Mining plant, construction hire, hardware, farming machinery and industrial equipment — specified for Zimbabwe, quoted from Cranborne, delivered nationwide."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: service.slug },
					className: "group grid overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)] md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-4/3 md:aspect-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
							src: service.image,
							alt: service.imageAlt
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-6 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
								children: service.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-3xl",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: service.summary
							})
						]
					})]
				}, service.slug))
			})
		]
	});
}
//#endregion
export { ServicesIndex as component };
