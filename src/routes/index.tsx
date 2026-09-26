import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Truck, Wrench, Clock, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import { EquipmentCard } from "@/components/equipment-card";
import { MediaImage } from "@/components/media-image";
import { equipment, services, site, whatsappUrl } from "@/data/site";
import { WhatsAppBadge, WhatsAppIcon } from "@/components/ui/official-badges";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heavy Machinery & Plant Zimbabwe | Omnicore Solutions Harare" },
      {
        name: "description",
        content:
          "Direct supply, plant hire, and field commissioning from Cranborne, Harare. Gold wash plants, hammer mills, excavators, and construction hardware across Zimbabwe.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredEquipment = equipment.slice(0, 6);

  return (
    <main className="relative overflow-hidden bg-white">
      {/* JSON-LD Schema */}
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

      {/* Luminous, Premium Light Industrial Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfd] via-[#f4f5f8] to-white pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-black/[0.06]">
        {/* Soft atmospheric gradient blurs for life and depth without darkness */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-gradient-to-br from-amber-100/50 via-emerald-100/30 to-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-24 size-[400px] rounded-full bg-amber-50/60 blur-2xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Clean Active Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-medium text-[#1d1d1f] shadow-2xs">
                <span className="flex size-2 rounded-full bg-[#1fa855]" />
                <span className="font-semibold text-[#1d1d1f]">Harare Cranborne Yard Active</span>
                <span className="text-black/20">·</span>
                <span className="text-[#6e6e73]">115 Chiremba Road</span>
              </div>

              {/* Bold, Clean High-Contrast Headline */}
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.08]">
                Heavy machinery for Zimbabwe’s{" "}
                <span className="text-[#0071e3]">mines</span>,{" "}
                <span className="text-[#1fa855]">farms</span> & sites.
              </h1>

              {/* Clear, punchy description */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#515154] max-w-xl">
                Direct equipment supply, hydraulic plant hire, and field commissioning from Cranborne. Gold processing circuits, hammer mills, concrete pumps, and excavators delivered and serviced nationwide.
              </p>

              {/* Action Buttons with toned, balanced green */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                {/* Balanced Toned-Down WhatsApp CTA */}
                <a
                  href={whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote for machinery.")}
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#1fa855] px-6 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(31,168,85,0.28)] transition-all hover:bg-[#1b934b] hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="size-5 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Request Firm Quote */}
                <Link
                  to="/quote"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-6 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#333336] hover:scale-105 active:scale-95"
                >
                  <span>Request Firm Quote</span>
                  <ArrowRight className="size-4" />
                </Link>

                {/* Catalogue View */}
                <Link
                  to="/catalogue"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/[0.08] bg-white px-5 text-sm font-medium text-[#1d1d1f] shadow-2xs transition-all hover:bg-[#f5f5f7]"
                >
                  View Catalogue
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-[#6e6e73]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#1fa855] shrink-0" />
                  Pre-tested in Cranborne
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#1fa855] shrink-0" />
                  Nationwide Lowbed Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-[#1fa855] shrink-0" />
                  Commissioning Engineers on Call
                </span>
              </div>
            </div>

            {/* Right Visual Column - Hero Machinery Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-black/[0.08] bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                {/* Rich machinery photograph */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src="/images/hero.jpg"
                    alt="Omnicore Heavy Excavators & Mining Plant in Zimbabwe"
                    className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle corner badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#1d1d1f] shadow-2xs">
                      <Sparkles className="size-3.5 text-amber-500" />
                      Ready for Site Dispatch
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white">
                      Harare Fleet
                    </span>
                  </div>
                </div>

                {/* Key Spec Card docked beneath image */}
                <div className="p-4 pt-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#1d1d1f]">
                        Heavy Earthmoving & Gold Circuits
                      </h3>
                      <p className="text-xs text-[#6e6e73] mt-0.5">
                        Supply · Operator Hire · Workshop Spares
                      </p>
                    </div>
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="inline-flex items-center gap-1 rounded-full bg-[#0071e3]/10 px-3 py-1 text-xs font-semibold text-[#0071e3] hover:bg-[#0071e3]/15 transition-colors"
                    >
                      <PhoneCall className="size-3" />
                      <span>{site.phoneDisplay}</span>
                    </a>
                  </div>

                  {/* 3 Micro Specs */}
                  <div className="mt-3 grid grid-cols-3 gap-2 border-t border-black/[0.06] pt-3 text-center">
                    <div className="rounded-xl bg-[#f5f5f7] p-2">
                      <p className="text-[10px] text-[#86868b] uppercase tracking-wider font-semibold">Tonnage</p>
                      <p className="text-xs font-bold text-[#1d1d1f] mt-0.5">1–25 TPH</p>
                    </div>
                    <div className="rounded-xl bg-[#f5f5f7] p-2">
                      <p className="text-[10px] text-[#86868b] uppercase tracking-wider font-semibold">Plant Hire</p>
                      <p className="text-xs font-bold text-[#1d1d1f] mt-0.5">Dry / Wet</p>
                    </div>
                    <div className="rounded-xl bg-[#f5f5f7] p-2">
                      <p className="text-[10px] text-[#86868b] uppercase tracking-wider font-semibold">Territory</p>
                      <p className="text-xs font-bold text-[#1d1d1f] mt-0.5">All 10 Prov.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating KPI Strip Docked to Hero Bottom */}
        <div className="mt-14 border-t border-black/[0.06] bg-white/70 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Harare Hub", detail: "115 Chiremba Rd, Cranborne", icon: MapPin },
                { label: "Direct Freight", detail: "Nationwide lowbed delivery", icon: Truck },
                { label: "Commissioning", detail: "Engineers on-site for run-up", icon: Wrench },
                { label: "Quick Turnaround", detail: "Instant quote on WhatsApp", icon: Clock },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f]">
                    <stat.icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1d1d1f]">{stat.label}</p>
                    <p className="text-[11px] text-[#86868b]">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Divisions Showcase */}
      <section className="py-16 sm:py-24 border-t border-black/[0.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#86868b] uppercase">
                Specialized Divisions
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
                Machinery on the ground.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-medium text-[#0071e3] hover:underline"
            >
              <span>View all five divisions</span>
              <ArrowRight className="size-3 ml-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.06] bg-white transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-[#f5f5f7]">
                    <MediaImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#1d1d1f] shadow-2xs">
                        {service.eyebrow}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="border-t border-black/[0.04] p-6 pt-4 flex items-center justify-between">
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center text-xs font-medium text-[#0071e3] hover:underline"
                  >
                    <span>Division details</span>
                    <ArrowRight className="size-3 ml-1" />
                  </Link>

                  <a
                    href={whatsappUrl(`Hello Omnicore, I am interested in ${service.title} equipment.`)}
                    className="inline-flex items-center gap-1.5"
                  >
                    <WhatsAppBadge compact label="Inquire" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment Grid */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]/60 border-t border-black/[0.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#86868b] uppercase">
                Ready For Dispatch
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
                Featured machinery catalogue.
              </h2>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center text-xs font-medium text-[#0071e3] hover:underline"
            >
              <span>Explore full 20+ item stock</span>
              <ArrowRight className="size-3 ml-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEquipment.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Engineering Commissioning Pillars */}
      <section className="py-16 sm:py-24 border-t border-black/[0.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wider text-[#86868b] uppercase">
              The Cranborne Standard
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
              Engineered for Zimbabwe conditions.
            </h2>
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              We do not drop crates at the border. Omnicore delivers tested, robust machinery configured specifically for local ores, power grids, and demanding haul roads.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Pre-Delivery Testing",
                body: "Every jaw crusher, hammer mill, slurry pump, and diesel generator is mechanically run up in our Cranborne workshop before dispatch.",
              },
              {
                icon: Wrench,
                title: "On-Site Commissioning",
                body: "Our mechanical staff travel with the plant to ensure foundation anchoring, alignment, electrical connections, and first-ton run-ups succeed.",
              },
              {
                icon: Truck,
                title: "Provincial Logistics",
                body: "Direct lowbed and flatbed delivery arranged from Harare to Bulawayo, Kadoma, Gweru, Kwekwe, Mutare, Chinhoyi, and remote claims.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-black/[0.06] bg-white p-8 transition-all hover:border-black/[0.12]"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]">
                  <pillar.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#1d1d1f]">{pillar.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincial Deployment Strip */}
      <section className="py-16 sm:py-20 bg-[#f5f5f7] border-t border-black/[0.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-wider text-[#86868b] uppercase">
              Nationwide Footprint
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
              Active machinery across Zimbabwe.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { city: "Midlands Province", focus: "Kwekwe · Gweru · Shurugwi", desc: "Gold milling circuits and trommel plants." },
              { city: "Mashonaland West", focus: "Kadoma · Chinhoyi", desc: "Hammer mills, jaw crushers and excavators." },
              { city: "Matabeleland", focus: "Bulawayo · Gwanda", desc: "Underground winches and high-tonnage ball mills." },
              { city: "Harare & Surrounds", focus: "Cranborne · Msasa · Ruwa", desc: "Hydraulic plant hire, fence machines & mixers." },
            ].map((hub) => (
              <div
                key={hub.city}
                className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#1d1d1f]">{hub.city}</h4>
                  <span className="size-2 rounded-full bg-emerald-500" />
                </div>
                <p className="mt-1 text-xs font-medium text-[#0071e3]">{hub.focus}</p>
                <p className="mt-2 text-xs text-[#86868b] leading-relaxed">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Bottom Call to Action */}
      <section className="py-20 bg-white border-t border-black/[0.04]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-block rounded-full bg-[#1fa855]/10 px-4 py-1 text-xs font-bold text-[#1fa855]">
            Fast Turnaround · Direct Harare Support
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Need machinery specs, hire dates, or a firm quote?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6e6e73] leading-relaxed max-w-xl mx-auto">
            Our Cranborne engineering team is ready to assist. Contact us via WhatsApp for instant stock photos, pro-forma invoices, and freight rates.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote.")}
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#1fa855] px-7 text-sm font-bold text-white shadow-[0_4px_16px_rgba(31,168,85,0.28)] transition-all hover:bg-[#1b934b] hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="size-5 shrink-0" />
              <span>WhatsApp Harare Desk</span>
            </a>

            <Link
              to="/quote"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#1d1d1f] px-7 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#333336] hover:scale-105 active:scale-95"
            >
              Request Tender / Pro-Forma
            </Link>

            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white px-6 text-sm font-medium text-[#1d1d1f] hover:bg-gray-50 transition-all"
            >
              <PhoneCall className="size-4 text-[#0071e3]" />
              <span>Call +263 77 733 4569</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
