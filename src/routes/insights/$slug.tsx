import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { getInsight, insights, whatsappUrl } from "@/data/site";
import { WhatsAppBadge } from "@/components/ui/official-badges";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getInsight(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.post.seoTitle ?? "Insights | Omnicore Solutions" },
      { name: "description", content: loaderData?.post.description ?? "" },
    ],
  }),
  component: InsightPage,
});

function InsightPage() {
  const { post } = Route.useLoaderData();
  const more = insights.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="pb-16">
      {/* Article Header */}
      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
        <Link
          to="/insights"
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="size-3.5 mr-1" />
          <span>Back to all insights</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-500 uppercase">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.read}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
          {post.kicker}
        </p>
      </article>

      {/* Hero Image */}
      <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-md">
          <MediaImage src={post.image} alt={post.imageAlt} className="aspect-16/9 w-full object-cover" />
        </div>
      </div>

      {/* Body Content */}
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {post.body.map((block, index) => (
          <section key={index} className="mt-8 first:mt-0">
            {block.heading ? (
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {block.heading}
              </h2>
            ) : null}
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {/* WhatsApp Consultation Box */}
        <div className="mt-12 flex flex-col gap-4 rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-900">Need this plant specified for your site?</p>
            <p className="text-xs text-slate-500 mt-0.5">
              Discuss tonnages, freight, and operator requirements with Cranborne engineers.
            </p>
          </div>
          <a
            href={whatsappUrl(`Hello Omnicore — I read “${post.title}” and need a machinery quote.`)}
            className="inline-flex shrink-0 items-center justify-center gap-2"
          >
            <WhatsAppBadge label="WhatsApp Consultation" />
          </a>
        </div>

        {/* More Articles */}
        {more.length > 0 ? (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Other field insights</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((item) => (
                <Link
                  key={item.slug}
                  to="/insights/$slug"
                  params={{ slug: item.slug }}
                  className="group rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
