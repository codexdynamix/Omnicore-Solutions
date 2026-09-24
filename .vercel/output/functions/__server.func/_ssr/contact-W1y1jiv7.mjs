import { d as whatsappUrl, u as site } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as Mail, i as Phone, l as Clock, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as QuoteForm } from "./quote-form-htj0IWaR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-W1y1jiv7.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "The Harare desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "115 Chiremba Road, Cranborne. WhatsApp first if you are on a site. We quote nationwide."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: Phone,
						label: "WhatsApp & calls",
						value: site.phoneDisplay,
						href: whatsappUrl()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: Phone,
						label: "Alt line",
						value: site.phoneAltDisplay,
						href: `tel:${site.phoneAltTel}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: Mail,
						label: "Email",
						value: site.email,
						href: `mailto:${site.email}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: MapPin,
						label: "Yard",
						value: `${site.address.line1}, ${site.address.line2}`,
						href: site.address.maps
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Hours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1 text-sm text-muted-foreground",
						children: site.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-6 sm:max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.time })]
						}, row.day))
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-2 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aspect-4/3 p-8 sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
								children: "Find us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-semibold tracking-tight",
								children: "Cranborne, along Chiremba Road."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
								children: "Call or WhatsApp before you drive — plant moves, and a five-minute ping saves a wasted trip. Open in Maps for directions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.address.maps,
								className: "mt-8 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground",
								children: "Open in Maps"
							})
						]
					})
				})]
			})
		]
	});
}
function Info({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: "rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] transition-shadow duration-150 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.12)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs tracking-wider text-muted-foreground uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-medium",
				children: value
			})
		]
	});
}
//#endregion
export { ContactPage as component };
