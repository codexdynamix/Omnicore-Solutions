import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { site, whatsappUrl } from "@/data/site";
import {
  WhatsAppBadge,
  GmailBadge,
  PhoneBadge,
  GoogleMapsBadge,
} from "@/components/ui/official-badges";
import { CheckCircle2, ShieldCheck, Clock, Truck } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Machinery Quote | Omnicore Solutions Harare" },
      {
        name: "description",
        content:
          "Request a machinery quote from Omnicore Solutions. Direct quoting for heavy plant, mining circuits, concrete pump hire and agricultural mills across Zimbabwe.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left Side: Information & Value Proof */}
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Harare Quoting Desk
            </p>
          </div>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Send the site details. Receive a tender rate.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Sale or hire. Wet or dry. We respond directly on WhatsApp with current Cranborne stock, freight lead-time, and a rate you can defend in a budget — not a marketing brochure.
          </p>

          {/* Value points */}
          <div className="mt-8 space-y-3">
            {[
              {
                icon: Clock,
                title: "Under 15-Minute Response",
                desc: "Direct contact with technical personnel in Cranborne during working hours.",
              },
              {
                icon: ShieldCheck,
                title: "Pre-Tested Machinery",
                desc: "Every diesel engine, hydraulic pump and electrical circuit tested before delivery.",
              },
              {
                icon: Truck,
                title: "Freight to All Provinces",
                desc: "Direct lowbed delivery to claims, farms, and sites across Zimbabwe.",
              },
            ].map((pt) => (
              <div
                key={pt.title}
                className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <pt.icon className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{pt.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Official Channel Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Official Direct Channels
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a href={whatsappUrl("Hello Omnicore — I need a fast quote.")}>
                <WhatsAppBadge label="WhatsApp +263 77 733 4569" />
              </a>
              <a href={`mailto:${site.email}`}>
                <GmailBadge label={site.email} />
              </a>
              <a href={`tel:${site.phoneTel}`}>
                <PhoneBadge label="Call Desk" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
