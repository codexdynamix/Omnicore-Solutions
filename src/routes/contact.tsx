import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { site, whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Harare desk | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Visit Omnicore at 115 Chiremba Road, Cranborne, Harare. WhatsApp +263 77 733 4569. Machinery quotes nationwide.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Contact
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        The Harare desk.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        115 Chiremba Road, Cranborne. WhatsApp first if you are on a site. We quote nationwide.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Info
          icon={Phone}
          label="WhatsApp & calls"
          value={site.phoneDisplay}
          href={whatsappUrl()}
        />
        <Info
          icon={Phone}
          label="Alt line"
          value={site.phoneAltDisplay}
          href={`tel:${site.phoneAltTel}`}
        />
        <Info icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
        <Info icon={MapPin} label="Yard" value={`${site.address.line1}, ${site.address.line2}`} href={site.address.maps} />
      </div>

      <div className="mt-4 rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 size-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Hours</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {site.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-6 sm:max-w-sm">
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
        <QuoteForm />
        <div className="overflow-hidden rounded-3xl bg-secondary">
          <div className="aspect-4/3 p-8 sm:p-12">
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Find us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Cranborne, along Chiremba Road.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Call or WhatsApp before you drive — plant moves, and a five-minute ping saves a wasted
              trip. Open in Maps for directions.
            </p>
            <a
              href={site.address.maps}
              className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] transition-shadow duration-150 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
    >
      <Icon className="size-4 text-muted-foreground" />
      <p className="mt-4 text-xs tracking-wider text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </a>
  );
}
