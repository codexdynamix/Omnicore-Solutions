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
import { WhatsAppBadge } from "@/components/ui/official-badges";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

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
      {/* Hero Section */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              {service.eyebrow}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-amber-600 font-semibold">Harare Cranborne Desk</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {service.headline}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {service.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              <Link to="/quote">Get Firm Quote</Link>
            </Button>
            <a
              href={whatsappUrl(`Hello Omnicore Harare Desk, I need a direct quote for ${service.title}.`)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 text-sm font-bold text-white shadow-xs hover:bg-[#20bd5a]"
            >
              <WhatsAppBadge compact label="WhatsApp This Line" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-md">
          <MediaImage
            src={service.image}
            alt={service.imageAlt}
            className="aspect-16/10 w-full object-cover"
          />
        </div>
      </section>

      {/* Engineering Advantages */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
          Field Capabilities & Zimbabwe Standards
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {service.bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs"
            >
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Hire Rates Table (if hire line) */}
      {service.slug === "hire" ? (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Plant Hire Rate Card
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Wet and dry hire, firm transparency.
              </h2>
            </div>
            <a
              href={whatsappUrl("Hello Omnicore, I want to book equipment hire.")}
              className="inline-flex items-center gap-1.5"
            >
              <WhatsAppBadge compact label="Book Hire Dates on WhatsApp" />
            </a>
          </div>

          <p className="mt-2 max-w-2xl text-xs text-slate-500">
            Daily and monthly hire rates quoted based on site location, mobilization, and operator requirement. Both wet (with certified operator & fuel options) and dry options available.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="hidden grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-bold tracking-wider text-slate-700 uppercase md:grid">
              <span>Machinery Model</span>
              <span>Capacity / Output</span>
              <span>Wet Hire Rate</span>
              <span>Dry Hire Rate</span>
            </div>
            {hireRates.map((row) => (
              <div
                key={row.machine}
                className="grid gap-1 border-b border-slate-100 px-6 py-4 transition-colors hover:bg-slate-50/80 last:border-0 md:grid-cols-4 md:gap-4 md:items-center"
              >
                <p className="font-bold text-slate-900 text-sm">{row.machine}</p>
                <p className="text-xs text-slate-600 font-medium">{row.output}</p>
                <div className="text-xs font-semibold text-slate-900">
                  <span className="md:hidden text-slate-400 font-normal mr-1">Wet:</span>
                  {row.wet}
                </div>
                <div className="text-xs text-slate-600">
                  <span className="md:hidden text-slate-400 font-normal mr-1">Dry:</span>
                  {row.dry}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Equipment on this line */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Machinery in this division
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.equipment.map((item) => (
            <span
              key={item}
              className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs"
            >
              {item}
            </span>
          ))}
        </div>

        {related.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        ) : null}
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Technical & Commercial FAQs
        </h2>
        <Accordion type="single" collapsible className="mt-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs">
          {service.faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q} className="border-b border-slate-100 last:border-0">
              <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-sky-600">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bottom Quote Form */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <QuoteForm defaultService={service.title} />
      </section>
    </main>
  );
}
