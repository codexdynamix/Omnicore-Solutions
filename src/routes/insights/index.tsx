import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { insights } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Technical Insights & Machinery Economics | Omnicore Solutions Zimbabwe" },
      {
        name: "description",
        content:
          "Practical engineering notes on wet vs dry plant hire, commercial hammer mills, gold circuit payback and rainy-season site planning in Zimbabwe.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Machinery Economics & Field Guides
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-amber-600 font-semibold">Harare Engineering Desk</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          ROI, uptime and field economics.
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          How to evaluate wet vs dry plant hire, calculate hammer mill milling payback, and prepare mining claims before the Zimbabwean rainy season.
        </p>
      </div>

      {/* Insights Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {insights.map((post) => (
          <Link
            key={post.slug}
            to="/insights/$slug"
            params={{ slug: post.slug }}
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <MediaImage
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-block rounded-md bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{post.read}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>

              <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                {post.title}
              </h2>

              <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                {post.description}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-sky-600">
                <span>Read technical guide</span>
                <ArrowRight className="size-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
