import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { services, whatsappUrl } from "@/data/site";
import { WhatsAppBadge } from "@/components/ui/official-badges";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Specialized Machinery Lines | Omnicore Solutions Zimbabwe" },
      {
        name: "description",
        content:
          "Five specialized machinery lines from Harare: mining equipment, hardware & construction, machinery hire, farming plant, and industrial manufacturing.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Specialized Engineering Divisions
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-amber-600 font-semibold">Harare Cranborne Desk</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Five divisions. One engineering desk.
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Mining circuits, construction plant hire, hardware supplies, commercial farming equipment and industrial production machinery — engineered for Zimbabwe, quoted from Cranborne, dispatched nationwide.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-10 grid gap-6">
        {services.map((service, index) => (
          <div
            key={service.slug}
            className="group grid overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md md:grid-cols-12"
          >
            <div className="relative aspect-16/10 md:aspect-auto md:col-span-5 overflow-hidden bg-slate-100 min-h-[260px]">
              <MediaImage
                src={service.image}
                alt={service.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-block rounded-md bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                  {service.eyebrow}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
              <div>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="inline-block"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h2>
                </Link>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {service.summary}
                </p>

                {/* Bullets / Highlights */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  {service.highlights.slice(0, 3).map((hl) => (
                    <span
                      key={hl}
                      className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 border border-slate-200/70"
                    >
                      <CheckCircle2 className="size-3 text-emerald-600" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="inline-flex items-center text-xs font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span>Read full line specifications</span>
                  <ArrowRight className="size-3.5 ml-1" />
                </Link>

                <a
                  href={whatsappUrl(`Hello Omnicore, I am interested in ${service.title}. What is your current availability and pricing?`)}
                  className="inline-flex items-center gap-1.5"
                >
                  <WhatsAppBadge compact label="Instant Line Quote" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
