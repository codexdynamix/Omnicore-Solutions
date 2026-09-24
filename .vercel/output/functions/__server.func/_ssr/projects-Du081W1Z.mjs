import { c as projects } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as MediaImage } from "./media-image-CBZ6vyt4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-Du081W1Z.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "Projects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "The machine, on the job."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "Buyers want to see plant working — not a stock render. A few of the sites and yards we spec for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
						src: project.image,
						alt: project.imageAlt,
						className: "aspect-4/3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-wider text-muted-foreground uppercase",
								children: [
									project.sector,
									" · ",
									project.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-2xl font-semibold tracking-tight",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: project.body
							})
						]
					})]
				}, project.id))
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
