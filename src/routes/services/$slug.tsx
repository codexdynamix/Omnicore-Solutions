import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/equipment-card";
import { MediaImage } from "@/components/media-image";
import { QuoteForm } from "@/components/quote-form";
import { equipment, getService, hireRates, whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.service.seoTitle ?? "Omnicore Solutions" },
      { name: "description", content: loaderData?.service.seoDescription ?? "" },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = equipment.filter((item) => item.category === service.slug);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {service.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{service.headline}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {service.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/quote">Get a quote</Link>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappUrl(`Hello Omnicore, I need ${service.title}.`)}>WhatsApp this line</a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <MediaImage src={service.image} alt={service.imageAlt} className="aspect-4/3" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {service.bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
            >
              <p className="text-sm leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>
      </section>

      {service.slug === "hire" ? (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">Wet and dry, on the same thread.</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Daily and weekly rates depend on mobilisation, operator and the week. We quote both wet
            and dry — no “call for prices” loop.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <div className="hidden grid-cols-4 gap-4 border-b border-border px-6 py-3 text-xs tracking-wider text-muted-foreground uppercase md:grid">
              <span>Machine</span>
              <span>Output</span>
              <span>Wet</span>
              <span>Dry</span>
            </div>
            {hireRates.map((row) => (
              <div
                key={row.machine}
                className="grid gap-1 border-b border-border px-6 py-4 last:border-0 md:grid-cols-4 md:gap-4"
              >
                <p className="font-medium">{row.machine}</p>
                <p className="text-sm text-muted-foreground">{row.output}</p>
                <p className="text-sm text-muted-foreground">{row.wet}</p>
                <p className="text-sm text-muted-foreground">{row.dry}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">On this line</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {service.equipment.map((item) => (
            <li
              key={item}
              className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        {related.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Questions we actually get</h2>
        <Accordion type="single" collapsible className="mt-4">
          {service.faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <QuoteForm defaultService={service.title} />
      </section>
    </main>
  );
}
