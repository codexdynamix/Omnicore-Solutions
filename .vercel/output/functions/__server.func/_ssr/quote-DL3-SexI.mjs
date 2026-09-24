import { u as site } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as QuoteForm } from "./quote-form-htj0IWaR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-DL3-SexI.js
var import_jsx_runtime = require_jsx_runtime();
function QuotePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
					children: "Quote"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Send the job. Get a number."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Sale or hire. Wet or dry. We reply on WhatsApp with stock, freight and a rate you can put in a tender — not a brochure."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [site.phoneDisplay, " · WhatsApp and calls"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: site.email }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							site.address.line1,
							", ",
							site.address.line2
						] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})]
		})
	});
}
//#endregion
export { QuotePage as component };
