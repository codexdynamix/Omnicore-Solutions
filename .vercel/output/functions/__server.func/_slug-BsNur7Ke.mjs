import { a as hireRates, d as whatsappUrl, n as equipment, t as cn } from "./_ssr/site-CUIpDz9m.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { u as ChevronDown } from "./_libs/lucide-react.mjs";
import { a as Button, n as Route } from "./_ssr/router-kQu3XU0L.mjs";
import { t as MediaImage } from "./_ssr/media-image-CBZ6vyt4.mjs";
import { t as EquipmentCard } from "./_ssr/equipment-card-BVwdMZkw.mjs";
import { t as QuoteForm } from "./_ssr/quote-form-htj0IWaR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BsNur7Ke.js
var import_jsx_runtime = require_jsx_runtime();
function Accordion({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		className: cn("w-full", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors hover:text-muted-foreground [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-none",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pb-5 leading-relaxed", className),
			children
		})
	});
}
function ServicePage() {
	const { service } = Route.useLoaderData();
	const related = equipment.filter((item) => item.category === service.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
					children: service.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
					children: service.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: service.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							children: "Get a quote"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "whatsapp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappUrl(`Hello Omnicore, I need ${service.title}.`),
							children: "WhatsApp this line"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
					src: service.image,
					alt: service.imageAlt,
					className: "aspect-4/3"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-6 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: service.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: bullet
					})
				}, bullet))
			})
		}),
		service.slug === "hire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold tracking-tight",
					children: "Wet and dry, on the same thread."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-muted-foreground",
					children: "Daily and weekly rates depend on mobilisation, operator and the week. We quote both wet and dry — no “call for prices” loop."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden grid-cols-4 gap-4 border-b border-border px-6 py-3 text-xs tracking-wider text-muted-foreground uppercase md:grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Machine" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Output" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Wet" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dry" })
						]
					}), hireRates.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 border-b border-border px-6 py-4 last:border-0 md:grid-cols-4 md:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: row.machine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: row.output
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: row.wet
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: row.dry
							})
						]
					}, row.machine))]
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold tracking-tight",
					children: "On this line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: service.equipment.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground",
						children: item
					}, item))
				}),
				related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentCard, { item }, item.id))
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-6 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold tracking-tight",
				children: "Questions we actually get"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-4",
				children: service.faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: faq.q,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: faq.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: faq.a })]
				}, faq.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { defaultService: service.title })
		})
	] });
}
//#endregion
export { ServicePage as component };
