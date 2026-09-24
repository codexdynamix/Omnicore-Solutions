import { i as __toESM } from "../_runtime.mjs";
import { d as whatsappUrl, l as services, t as cn } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as Check } from "../_libs/lucide-react.mjs";
import { a as Button } from "./router-kQu3XU0L.mjs";
import { t as Input } from "./input-CcWTU_du.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-form-htj0IWaR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-xl bg-card px-3.5 py-3 text-sm text-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition-[box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-background),0_0_0_4px_var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var intents = [
	"Buy",
	"Hire",
	"Both",
	"Not sure"
];
function QuoteForm({ defaultService = "", compact = false }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [wa, setWa] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const payload = {
			name: String(form.get("name") ?? "").trim(),
			phone: String(form.get("phone") ?? "").trim(),
			email: String(form.get("email") ?? "").trim(),
			service: String(form.get("service") ?? "").trim(),
			intent: String(form.get("intent") ?? "").trim(),
			message: String(form.get("message") ?? "").trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			localStorage.setItem("omnicore-last-quote", JSON.stringify(payload));
		} catch {}
		const text = [
			`Hello Omnicore, I'm ${payload.name}.`,
			payload.intent ? `Intent: ${payload.intent}.` : "",
			payload.service ? `Service: ${payload.service}.` : "",
			payload.message,
			payload.phone ? `Phone: ${payload.phone}` : "",
			payload.email ? `Email: ${payload.email}` : ""
		].filter(Boolean).join(" ");
		const url = whatsappUrl(text);
		setWa(url);
		setSent(true);
		window.open(url, "_blank", "noopener,noreferrer");
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-card p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-xl font-semibold tracking-tight",
				children: "Quote started on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: "If a new chat did not open, use the button below. We typically reply the same working day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "whatsapp",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: wa,
					children: "Open WhatsApp"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:p-8",
		children: [
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
					children: "WhatsApp-first quoting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: "Tell us the job."
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						htmlFor: "name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							autoComplete: "name",
							placeholder: "Your name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone / WhatsApp",
						htmlFor: "phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							required: true,
							autoComplete: "tel",
							inputMode: "tel",
							placeholder: "07…"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email (optional)",
						htmlFor: "email",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							placeholder: "you@company.co.zw"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Service line",
						htmlFor: "service",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "service",
							name: "service",
							defaultValue: defaultService,
							className: "flex h-11 w-full rounded-xl bg-card px-3.5 text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-background),0_0_0_4px_var(--color-ring)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select…"
								}),
								services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: service.title,
									children: service.title
								}, service.slug)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Catalogue item",
									children: "Something in the catalogue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Other",
									children: "Other"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Buy or hire",
						htmlFor: "intent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "intent",
							name: "intent",
							defaultValue: "Not sure",
							className: "flex h-11 w-full rounded-xl bg-card px-3.5 text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-background),0_0_0_4px_var(--color-ring)]",
							children: intents.map((intent) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: intent,
								children: intent
							}, intent))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "What do you need?",
						htmlFor: "message",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							required: true,
							placeholder: "Machine, site, dates, tonnes or cubic metres — whatever you know."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-6 w-full sm:w-auto",
				size: "lg",
				children: "Send via WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-muted-foreground",
				children: "Opens WhatsApp with your message. Indicative catalogue prices are confirmed before any payment."
			})
		]
	});
}
function Field({ label, htmlFor, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			className: "mb-1.5 block",
			children: label
		}), children]
	});
}
//#endregion
export { QuoteForm as t };
