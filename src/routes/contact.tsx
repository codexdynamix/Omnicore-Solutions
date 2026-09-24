import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { site, whatsappUrl } from "@/data/site";
import {
  WhatsAppBadge,
  GmailBadge,
  GoogleMapsBadge,
  PhoneBadge,
} from "@/components/ui/official-badges";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Harare Machinery Desk | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Visit Omnicore Solutions at 115 Chiremba Road, Cranborne, Harare. Direct WhatsApp quoting +263 77 733 4569. Machinery sales and plant hire nationwide.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
            Harare Desk & Dispatch Yard · Cranborne
          </p>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Direct machinery contact.
        </h1>
        <p className="mt-2 max-w-2xl text-base text-slate-600">
          115 Chiremba Road, Cranborne, Harare. Reach our engineers directly on WhatsApp, phone or email. We provide firm price and hire availability for sites across Zimbabwe.
        </p>
      </div>

      {/* Official Channel Badges Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* WhatsApp Channel Card */}
        <a
          href={whatsappUrl("Hello Omnicore Harare Desk — I would like an equipment quote.")}
          className="group relative flex flex-col justify-between rounded-xl bg-white p-5 border border-slate-200/90 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#25D366] hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between">
              <WhatsAppBadge label="WhatsApp" />
              <ArrowUpRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#25D366]" />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">
              {site.phoneDisplay}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Instant quotes, plant photos & voice notes. Average reply: &lt;15 mins.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#25D366]">
            <span>Open WhatsApp Chat</span>
          </div>
        </a>

        {/* Alternative Phone Card */}
        <a
          href={`tel:${site.phoneAltTel}`}
          className="group relative flex flex-col justify-between rounded-xl bg-white p-5 border border-slate-200/90 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between">
              <PhoneBadge label="Voice Calling" />
              <ArrowUpRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900" />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-900">
              {site.phoneAltDisplay}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Urgent yard dispatch line, operator bookings & driver coordination.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
            <span>Call Cranborne Desk</span>
          </div>
        </a>

        {/* Official Gmail / Email Card */}
        <a
          href={`mailto:${site.email}`}
          className="group relative flex flex-col justify-between rounded-xl bg-white p-5 border border-slate-200/90 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-red-400 hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between">
              <GmailBadge label="Official Email" />
              <ArrowUpRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-500" />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-900 truncate">
              {site.email}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Official company pro-forma invoices, tender documents and specifications.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-red-600">
            <span>Send Email Document</span>
          </div>
        </a>

        {/* Official Google Maps Card */}
        <a
          href={site.address.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between rounded-xl bg-white p-5 border border-slate-200/90 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#4285F4] hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between">
              <GoogleMapsBadge label="Google Maps" />
              <ArrowUpRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#4285F4]" />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-900">
              {site.address.line1}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {site.address.line2}. Easy truck access for lowbed trailers & flatbeds.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#4285F4]">
            <span>Navigate in Maps</span>
          </div>
        </a>
      </div>

      {/* Operating Hours Bar */}
      <div className="mt-6 rounded-xl bg-slate-900 p-5 text-white shadow-xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
              <Clock className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Yard & Workshop Hours
              </p>
              <p className="text-sm font-bold text-white">
                Open for physical viewing & loading
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            {site.hours.map((row) => (
              <div key={row.day} className="rounded-md bg-slate-800/80 px-3 py-1.5 border border-slate-700">
                <span className="text-slate-400 mr-2">{row.day}:</span>
                <span className="font-semibold text-slate-100">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Form & Yard Map Section */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <QuoteForm />

        {/* Physical Yard Information */}
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  <MapPin className="size-3.5 text-red-500" />
                  Harare Physical Yard
                </span>
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:underline"
                >
                  <span>Google Maps Pin</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                Visiting the Cranborne Yard.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Along Chiremba Road, close to major Harare arterial routes. Heavy machinery can be inspected, demonstrated, and loaded onto lowbeds directly from our yard.
              </p>

              <div className="mt-6 space-y-3 rounded-xl bg-slate-50 p-4 border border-slate-200/60 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>Crane & Forklift Loading:</strong> Overhead lifting available on-site for secure truck loading.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>Live Machinery Run-Up:</strong> Testing of diesel engines, jaw crushers, and pumps before release.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>Nationwide Waybills:</strong> Cross-country delivery arranged to Bulawayo, Gweru, Mutare, Kadoma, and all mining districts.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors"
                >
                  <GoogleMapsBadge compact label="Open Directions in Google Maps" />
                </a>
                <a
                  href={whatsappUrl("Hello! I am planning to visit the Cranborne yard today.")}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 text-sm font-semibold text-white shadow-xs hover:bg-[#20bd5a] transition-colors"
                >
                  <WhatsAppBadge compact label="Notify Yard on WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
