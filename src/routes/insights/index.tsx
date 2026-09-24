import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { insights } from "@/data/site";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights | Hire, mills and payback | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Practical notes on wet vs dry hire, hammer mills, gold-circuit payback and rainy-season plant in Zimbabwe.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Insights
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        ROI, not spec sheets.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        How to choose wet or dry hire, when a mill pays, and what to have on site before the rains.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {insights.map((post) => (
          <Link
            key={post.slug}
            to="/insights/$slug"
            params={{ slug: post.slug }}
            className="group overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            <MediaImage src={post.image} alt={post.imageAlt} className="aspect-16/10" />
            <div className="p-6">
              <p className="text-xs text-muted-foreground">
                {post.category} · {post.read} · {post.date}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
