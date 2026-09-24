import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Mining, Hire, Farming, Hardware | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Five service lines from Harare: mining equipment, hardware and construction, machinery hire, farming plant, and industrial machinery.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Services
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Five lines. One WhatsApp number.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Mining plant, construction hire, hardware, farming machinery and industrial equipment —
        specified for Zimbabwe, quoted from Cranborne, delivered nationwide.
      </p>

      <div className="mt-12 grid gap-5">
        {services.map((service) => (
          <Link
            key={service.slug}
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="group grid overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)] md:grid-cols-2"
          >
            <div className="aspect-4/3 md:aspect-auto">
              <MediaImage src={service.image} alt={service.imageAlt} />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {service.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
