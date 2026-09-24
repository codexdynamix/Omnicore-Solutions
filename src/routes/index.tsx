import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/equipment-card";
import { MediaImage } from "@/components/media-image";
import { equipment, insights, services, site, whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Omnicore Solutions | Machinery for Zimbabwe’s farms, mines and sites",
      },
      { name: "description", content: site.description },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = equipment.filter((item) =>
    ["jaw-crusher", "concrete-pump", "feed-mixer-1t", "electric-fence", "excavator-hire", "generator"].includes(
      item.id,
    ),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.name,
            description: site.description,
            telephone: site.phoneTel,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.line1,
              addressLocality: "Harare",
              addressCountry: "ZW",
            },
            url: "https://omnicoresolutions.co.zw",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 sm:pt-16 sm:pb-12">
        <p className="text-center text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Harare · Nationwide
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl text-center text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Machinery for Zimbabwe’s farms, mines and sites.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Buy, hire and commission the plant that pays for itself — gold circuits, concrete pumps,
          feed mills and fence machines. Quoted on WhatsApp. Delivered from Cranborne.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/quote">Get a quote</Link>
          </Button>
          <Button asChild size="lg" variant="whatsapp">
            <a href={whatsappUrl("Hello Omnicore — I need machinery.")}>
              <MessageCircle />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
          <MediaImage
            src="/images/hero.jpg"
            alt="Excavator on Zimbabwe highveld at golden hour"
            className="aspect-16/9 max-h-[560px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-4">
          {[
            { k: "Desk", v: "Cranborne, Harare" },
            { k: "Reach", v: "Nationwide delivery" },
            { k: "Model", v: "Sale, hire, commission" },
            { k: "Season", v: "Peak Aug – Dec" },
          ].map((stat) => (
            <div key={stat.k} className="bg-card px-5 py-6">
              <p className="text-xs tracking-wider text-muted-foreground uppercase">{stat.k}</p>
              <p className="mt-1 text-sm font-medium">{stat.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Five lines. One desk.
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              What we put on the ground.
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/services">
              All services <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className={
                index === 0
                  ? "group relative overflow-hidden rounded-3xl sm:col-span-2 lg:col-span-2"
                  : "group relative overflow-hidden rounded-3xl"
              }
            >
              <div className="aspect-4/3 lg:aspect-auto lg:min-h-80">
                <MediaImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="text-xs tracking-[0.16em] uppercase opacity-80">{service.eyebrow}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/85">
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-12 sm:py-14">
          <p className="text-xs font-medium tracking-[0.18em] uppercase opacity-70">Now – December</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Peak season for gold plant, feed mills and rainy-season hire.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            August to December is when claims mill, farms mix ration, and sites pour before the
            storms. If the machine is still “next week”, it is already late.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary">
              <Link to="/services/$slug" params={{ slug: "hire" }}>
                Hire a pump or mixer
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/catalogue">Open the catalogue</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Catalogue
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Plant with a price, or a rate.
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/catalogue">
              Full catalogue <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Specify. Quote. On the ground.
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  n: "01",
                  t: "Tell us the job",
                  d: "Ore, cubic metres, herd size, or a photo of the nameplate. Enough to spec, not a tender novel.",
                },
                {
                  n: "02",
                  t: "Quote on WhatsApp",
                  d: "Indicative USD or a hire rate, with freight and wet/dry called out. Confirm before you pay.",
                },
                {
                  n: "03",
                  t: "Deliver and commission",
                  d: "Harare desk, nationwide trucks. For circuits and mills, we stay until it actually runs.",
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-10 shrink-0 text-sm font-medium text-muted-foreground tabular-nums">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-medium">{step.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <MediaImage
              src="/images/jaw-crusher.jpg"
              alt="Jaw crusher specified for Zimbabwe gold circuits"
              className="aspect-4/3"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Insights
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              How the plant pays for itself.
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/insights">
              All notes <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {insights.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to="/insights/$slug"
              params={{ slug: post.slug }}
              className="group overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
            >
              <MediaImage src={post.image} alt={post.imageAlt} className="aspect-16/10" />
              <div className="p-5">
                <p className="text-xs text-muted-foreground">
                  {post.category} · {post.read}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-accent">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-4 pb-16 sm:px-6">
        <div className="rounded-3xl bg-card px-6 py-12 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Need the machine this week?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            WhatsApp the site, the tonnes or the pour. We will tell you sale, hire, or not yet.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp">
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </Button>
            <Button asChild size="lg">
              <Link to="/quote">Get a quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
