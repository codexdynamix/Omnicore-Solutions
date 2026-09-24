import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MediaImage } from "@/components/media-image";
import { getInsight, insights, whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getInsight(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.post.seoTitle ?? "Insights | Omnicore" },
      { name: "description", content: loaderData?.post.description ?? "" },
    ],
  }),
  component: InsightPage,
});

function InsightPage() {
  const { post } = Route.useLoaderData();
  const more = insights.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="pb-16">
      <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {post.category} · {post.read}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.kicker}</p>
        <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
      </article>

      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl px-4 sm:px-6">
        <MediaImage src={post.image} alt={post.imageAlt} className="aspect-16/9 rounded-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {post.body.map((block, index) => (
          <section key={index} className="mt-8 first:mt-0">
            {block.heading ? (
              <h2 className="text-2xl font-semibold tracking-tight">{block.heading}</h2>
            ) : null}
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-12 flex flex-col gap-3 rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">Want this spec’d for your site?</p>
          <Button asChild variant="whatsapp">
            <a href={whatsappUrl(`Hello Omnicore — I read “${post.title}” and I need a quote.`)}>
              WhatsApp a quote
            </a>
          </Button>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight">More notes</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {more.map((item) => (
            <Link
              key={item.slug}
              to="/insights/$slug"
              params={{ slug: item.slug }}
              className="rounded-3xl bg-card p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
            >
              <p className="text-xs text-muted-foreground">{item.category}</p>
              <p className="mt-2 font-medium tracking-tight">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
