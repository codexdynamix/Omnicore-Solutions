import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { d as whatsappUrl, t as cn } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as MediaImage } from "./media-image-CBZ6vyt4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-card-BVwdMZkw.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground",
		muted: "bg-secondary text-secondary-foreground",
		outline: "shadow-[0_0_0_1px_rgba(0,0,0,0.1)] text-foreground",
		accent: "bg-accent/10 text-accent"
	} },
	defaultVariants: { variant: "muted" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function EquipmentCard({ item }) {
	const message = `Hello Omnicore, I'm interested in the ${item.name} (${item.intent === "hire" ? "hire" : "purchase"}).`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.06)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-4/3 overflow-hidden bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
				src: item.image,
				alt: item.imageAlt,
				className: "transition-transform duration-500 ease-out group-hover:scale-[1.03]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3 left-3 flex gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: item.intent === "hire" ? "default" : "muted",
					children: item.intent === "hire" ? "Hire" : "Sale"
				}), item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					children: item.badge
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
					children: item.spec ?? item.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-lg font-semibold tracking-tight",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: item.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: item.price ?? item.priceNote ?? "Quote on request"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappUrl(message),
						className: "text-sm font-medium text-accent hover:underline",
						children: "WhatsApp"
					})]
				})
			]
		})]
	});
}
//#endregion
export { EquipmentCard as t };
