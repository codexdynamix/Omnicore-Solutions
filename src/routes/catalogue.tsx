import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { EquipmentCard } from "@/components/equipment-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { equipment, services, type Category, type Intent, whatsappUrl } from "@/data/site";
import { WhatsAppBadge } from "@/components/ui/official-badges";

type CatalogueSearch = {
  category?: Category;
  intent?: Intent;
  q?: string;
};

export const Route = createFileRoute("/catalogue")({
  validateSearch: (search: Record<string, unknown>): CatalogueSearch => ({
    category: isCategory(search.category) ? search.category : undefined,
    intent: search.intent === "sale" || search.intent === "hire" ? search.intent : undefined,
    q: typeof search.q === "string" && search.q.length > 0 ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Equipment Catalogue | Sale & Hire Zimbabwe | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Searchable catalogue of mining, construction, farming and industrial machinery for sale and hire in Zimbabwe. Real stock at Cranborne yard, Harare.",
      },
    ],
  }),
  component: CataloguePage,
});

function isCategory(value: unknown): value is Category {
  return services.some((service) => service.slug === value);
}

function CataloguePage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const category = search.category ?? "all";
  const intent = search.intent ?? "all";
  const [query, setQuery] = useState(search.q ?? "");

  const filtered = useMemo(() => {
    const q = (search.q ?? "").trim().toLowerCase();
    return equipment.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (intent !== "all" && item.intent !== intent) return false;
      if (!q) return true;
      return `${item.name} ${item.blurb} ${item.spec} ${item.category}`.toLowerCase().includes(q);
    });
  }, [search, category, intent]);

  function setFilter(next: {
    category?: "all" | Category;
    intent?: "all" | Intent;
    q?: string;
  }) {
    const nextCategory = next.category === undefined ? search.category : next.category === "all" ? undefined : next.category;
    const nextIntent = next.intent === undefined ? search.intent : next.intent === "all" ? undefined : next.intent;
    const nextQ = next.q !== undefined ? (next.q || undefined) : search.q;
    void navigate({
      search: {
        category: nextCategory,
        intent: nextIntent,
        q: nextQ,
      },
      replace: true,
    });
  }

  const chips: { label: string; category: "all" | Category }[] = [
    { label: "All Machinery", category: "all" },
    ...services.map((service) => ({ label: service.navLabel, category: service.slug })),
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Machinery Inventory & Hire Fleet
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-amber-600 font-semibold">Harare Cranborne Yard</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Sale & plant hire catalogue.
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Browse verified machinery in stock. Indicative USD pricing shown where standardized. Confirm availability, custom configurations, and nationwide transport directly on WhatsApp.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-8 rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(event) => {
                const value = event.target.value;
                setQuery(value);
                setFilter({ q: value });
              }}
              placeholder="Search crushers, concrete pumps, feed mills, excavators…"
              className="pl-10 text-sm border-slate-200 focus:border-sky-500 rounded-lg"
              aria-label="Search equipment"
            />
          </div>

          {/* Mode Switch (Sale / Hire / All) */}
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1">
            {(["all", "sale", "hire"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter({ intent: value })}
                className={cn(
                  "rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
                  intent === value
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                {value === "all" ? "All Options" : value === "sale" ? "For Sale" : "Plant Hire"}
              </button>
            ))}
          </div>
        </div>

        {/* Category Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="size-3" />
            Filter:
          </span>
          {chips.map((chip) => (
            <button
              key={chip.category}
              type="button"
              onClick={() => setFilter({ category: chip.category })}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors duration-150",
                category === chip.category
                  ? "bg-slate-900 text-white font-semibold"
                  : "bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100",
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Quick Help */}
      <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold text-slate-700">
          Showing <strong className="text-slate-900">{filtered.length}</strong> available machine{filtered.length === 1 ? "" : "s"}
        </span>

        <a
          href={whatsappUrl("Hello Omnicore Harare Desk — I am looking for a machine not listed on the website.")}
          className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:underline"
        >
          <WhatsAppBadge compact label="Can't find a model? Ask on WhatsApp" />
        </a>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-10 text-center shadow-xs">
          <h3 className="text-base font-bold text-slate-900">No machinery matched your filters</h3>
          <p className="mt-1 text-xs text-slate-500">
            We frequently have equipment in transit or arriving at Cranborne. Ask our desk directly.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href={whatsappUrl(`Hello Omnicore, I am searching for "${query}". Do you have this in stock?`)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#20bd5a]"
            >
              <WhatsAppBadge compact label="Inquire on WhatsApp" />
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}
