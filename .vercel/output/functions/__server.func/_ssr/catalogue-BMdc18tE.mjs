import { i as __toESM } from "../_runtime.mjs";
import { l as services, n as equipment, t as cn } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { i as Route$7 } from "./router-kQu3XU0L.mjs";
import { t as EquipmentCard } from "./equipment-card-BVwdMZkw.mjs";
import { t as Input } from "./input-CcWTU_du.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogue-BMdc18tE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CataloguePage() {
	const search = Route$7.useSearch();
	const navigate = Route$7.useNavigate();
	const category = search.category ?? "all";
	const intent = search.intent ?? "all";
	const [query, setQuery] = (0, import_react.useState)(search.q ?? "");
	const filtered = (0, import_react.useMemo)(() => {
		const q = (search.q ?? "").trim().toLowerCase();
		return equipment.filter((item) => {
			if (category !== "all" && item.category !== category) return false;
			if (intent !== "all" && item.intent !== intent) return false;
			if (!q) return true;
			return `${item.name} ${item.blurb} ${item.spec} ${item.category}`.toLowerCase().includes(q);
		});
	}, [
		search,
		category,
		intent
	]);
	function setFilter(next) {
		const nextCategory = next.category === void 0 ? search.category : next.category === "all" ? void 0 : next.category;
		const nextIntent = next.intent === void 0 ? search.intent : next.intent === "all" ? void 0 : next.intent;
		const nextQ = next.q !== void 0 ? next.q || void 0 : search.q;
		navigate({
			search: {
				category: nextCategory,
				intent: nextIntent,
				q: nextQ
			},
			replace: true
		});
	}
	const chips = [{
		label: "All lines",
		category: "all"
	}, ...services.map((service) => ({
		label: service.navLabel,
		category: service.slug
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "Catalogue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl",
				children: "Sale and hire, in one list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted-foreground",
				children: "Indicative USD prices where we publish them. Hire rates on request. Confirm stock and freight on WhatsApp before you pay."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (event) => {
						const value = event.target.value;
						setQuery(value);
						setFilter({ q: value });
					},
					placeholder: "Search crushers, pumps, mixers…",
					className: "pl-10",
					"aria-label": "Search equipment"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					"all",
					"sale",
					"hire"
				].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter({ intent: value }),
					className: cn("h-10 rounded-full px-4 text-sm font-medium transition-colors duration-150", intent === value ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-border"),
					children: value === "all" ? "Sale & hire" : value === "sale" ? "For sale" : "For hire"
				}, value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter({ category: chip.category }),
					className: cn("h-10 rounded-full px-4 text-sm font-medium transition-colors duration-150", category === chip.category ? "bg-primary text-primary-foreground" : "bg-card text-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.14)]"),
					children: chip.label
				}, chip.category))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground tabular-nums",
				children: [
					filtered.length,
					" machine",
					filtered.length === 1 ? "" : "s"
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-muted-foreground",
				children: "Nothing matches. Clear filters, or WhatsApp the spec — we may have it inbound."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentCard, { item }, item.id))
			})
		]
	});
}
//#endregion
export { CataloguePage as component };
