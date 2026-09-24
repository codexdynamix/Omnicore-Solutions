import { d as whatsappUrl, o as insights } from "./_ssr/site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Button, r as Route$2 } from "./_ssr/router-kQu3XU0L.mjs";
import { t as MediaImage } from "./_ssr/media-image-CBZ6vyt4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BpOhxMTj.js
var import_jsx_runtime = require_jsx_runtime();
function InsightPage() {
	const { post } = Route$2.useLoaderData();
	const more = insights.filter((item) => item.slug !== post.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: [
							post.category,
							" · ",
							post.read
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: post.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: post.date
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
					src: post.image,
					alt: post.imageAlt,
					className: "aspect-16/9 rounded-3xl"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
				children: [post.body.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 first:mt-0",
					children: [block.heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight",
						children: block.heading
					}) : null, block.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: paragraph
					}, paragraph.slice(0, 40)))]
				}, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col gap-3 rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Want this spec’d for your site?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "whatsapp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappUrl(`Hello Omnicore — I read “${post.title}” and I need a quote.`),
							children: "WhatsApp a quote"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "More notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-3",
					children: more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/insights/$slug",
						params: { slug: item.slug },
						className: "rounded-3xl bg-card p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.12)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: item.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium tracking-tight",
							children: item.title
						})]
					}, item.slug))
				})]
			})
		]
	});
}
//#endregion
export { InsightPage as component };
