import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { EquipmentCard } from "@/components/equipment-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { equipment, services, type Category, type Intent } from "@/data/site";

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
      { title: "Equipment Catalogue | Sale & Hire | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Filterable catalogue of mining, construction, farming and industrial machinery for sale and hire in Zimbabwe. Indicative USD prices, confirm on WhatsApp.",
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
    { label: "All lines", category: "all" },
    ...services.map((service) => ({ label: service.navLabel, category: service.slug })),
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Catalogue
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Sale and hire, in one list.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Indicative USD prices where we publish them. Hire rates on request. Confirm stock and freight
        on WhatsApp before you pay.
      </p>

      <div className="relative mt-8 max-w-md">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => {
            const value = event.target.value;
            setQuery(value);
            setFilter({ q: value });
          }}
          placeholder="Search crushers, pumps, mixers…"
          className="pl-10"
          aria-label="Search equipment"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["all", "sale", "hire"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter({ intent: value })}
            className={cn(
              "h-10 rounded-full px-4 text-sm font-medium transition-colors duration-150",
              intent === value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border",
            )}
          >
            {value === "all" ? "Sale & hire" : value === "sale" ? "For sale" : "For hire"}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip.category}
            type="button"
            onClick={() => setFilter({ category: chip.category })}
            className={cn(
              "h-10 rounded-full px-4 text-sm font-medium transition-colors duration-150",
              category === chip.category
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.14)]",
            )}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground tabular-nums">
        {filtered.length} machine{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-muted-foreground">
          Nothing matches. Clear filters, or WhatsApp the spec — we may have it inbound.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}
