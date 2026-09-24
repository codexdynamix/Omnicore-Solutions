import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/equipment-card";
import { MediaImage } from "@/components/media-image";
import { equipment, services, site, whatsappUrl } from "@/data/site";
import {
  WhatsAppBadge,
  GmailBadge,
  GoogleMapsBadge,
} from "@/components/ui/official-badges";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Omnicore Solutions | Machinery for Zimbabwe’s Farms, Mines & Sites",
      },
      { name: "description", content: site.description },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const featuredEquipment = equipment.filter((item) => {
    if (activeCategory === "all") {
      return ["jaw-crusher", "concrete-pump", "feed-mixer-1t", "excavator-hire", "generator", "electric-fence"].includes(item.id);
    }
    return item.category === activeCategory;
  });

  return (
    <main className="flex flex-col">
      {/* Schema.org LocalBusiness structured data */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Header Tagline & Badges */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Harare Desk</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">Cranborne Dispatch Yard</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-600 font-bold">Nationwide Delivery</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              Heavy machinery for Zimbabwe’s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-amber-600">
                farms, mines & sites.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Buy, hire and commission verified industrial plant. Gold processing circuits, truck-mounted concrete pumps, commercial hammer mills, and hydraulic excavators. Handled directly by Cranborne engineers.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row w-full max-w-md">
              <Button asChild size="lg" className="w-full sm:w-auto h-12 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xs">
                <Link to="/quote">
                  <span>Get Firm Quote</span>
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>

              <a
                href={whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote for machinery.")}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#20bd5a] hover:shadow-sm active:scale-95"
              >
                <WhatsAppBadge compact label="Chat on WhatsApp" />
              </a>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-5 rounded-lg border-slate-200 text-slate-800 hover:bg-slate-50">
                <Link to="/catalogue">Catalogue</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-xl">
            <MediaImage
              src="/images/hero.jpg"
              alt="Heavy excavator and mining equipment on an infrastructure project in Zimbabwe at sunrise"
              className="aspect-16/9 max-h-[580px] w-full object-cover"
            />
            {/* Gradient Protection overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Floating Overlays */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10 shadow-sm">
                <ShieldCheck className="size-4 text-emerald-400" />
                Tested & Commissioned in Zimbabwe
              </span>
            </div>

            <div className="absolute right-4 bottom-4 left-4 sm:right-6 sm:bottom-6 sm:left-auto flex items-center justify-between sm:justify-end gap-3">
              <div className="rounded-xl bg-slate-950/90 p-4 text-white backdrop-blur-md border border-white/10 max-w-xs shadow-lg">
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Ready in Cranborne
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Inspection, live test run, and crane loading available Mon–Sat.
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <a
                    href={whatsappUrl("Hello! I would like to book a yard inspection in Cranborne.")}
                    className="text-xs font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Book yard visit</span>
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Harare Hub", detail: "115 Chiremba Rd, Cranborne", icon: MapPin },
              { label: "Direct Freight", detail: "Nationwide delivery to claim/site", icon: Truck },
              { label: "Commissioning", detail: "Engineers on-site for run-up", icon: Wrench },
              { label: "Quote Turnaround", detail: "Within 15 mins on WhatsApp", icon: Clock },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <stat.icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{stat.label}</p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Peak Banner */}
      <section className="border-y border-amber-200/80 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500 text-white shadow-2xs">
              <Flame className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Peak Season Booking · August – December
              </p>
              <p className="text-sm font-semibold text-slate-900">
                High demand on gold milling plant, concrete pump hire, and wet-hire excavators.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl("Hello Omnicore, I want to secure machinery for the current season.")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#20bd5a]"
            >
              <WhatsAppBadge compact label="Lock In Seasonal Rate" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Portfolio Showcase (Varied Architectural Layout) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                5 Specialized Divisions
              </p>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Machinery on the ground.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-slate-900 hover:underline"
            >
              <span>View full service breakdown</span>
              <ArrowRight className="size-3.5 ml-1" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const isLarge = index === 0;
              return (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className={`group relative flex flex-col justify-end overflow-hidden rounded-xl border border-slate-200/90 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isLarge ? "sm:col-span-2 lg:col-span-2 min-h-[360px]" : "min-h-[300px]"
                  }`}
                >
                  <MediaImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  <div className="relative z-10 p-6 text-white">
                    <span className="inline-block rounded-md bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs text-white">
                      {service.eyebrow}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-xs leading-relaxed text-slate-200/90">
                      {service.summary}
                    </p>
                    <div className="mt-4 inline-flex items-center text-xs font-semibold text-white group-hover:text-amber-300">
                      <span>Explore specifications & rates</span>
                      <ChevronRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Equipment Grid with Interactive Tabs */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Inventory & Hire Fleet
              </p>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Featured machinery in stock.
              </h2>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline"
            >
              <span>Browse all 40+ machines</span>
              <ArrowRight className="size-3.5 ml-1" />
            </Link>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { id: "all", label: "Featured Selection" },
              { id: "mining", label: "Mining & Gold Plant" },
              { id: "hire", label: "Machinery Hire" },
              { id: "hardware", label: "Concrete & Construction" },
              { id: "farming", label: "Agriculture & Feed Mills" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Equipment Cards Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEquipment.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>

          {/* Bottom Prompt */}
          <div className="mt-10 flex flex-col items-center justify-center rounded-xl bg-white p-6 border border-slate-200 text-center shadow-xs sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Looking for a custom processing circuit or specific tonnage?
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                We custom-engineer gold circuits, jaw crusher setups and feed plants to site specifications.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-2">
              <Button asChild size="sm" className="rounded-lg bg-slate-900 text-white">
                <Link to="/quote">Request Custom Spec</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Deployments Across Zimbabwe */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Field Deployments
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Proven on Zimbabwe sites.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our machinery is working daily on mining claims, commercial agricultural schemes, and infrastructure pours across every province.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                region: "Kadoma & Kwekwe",
                focus: "Gold Processing Circuits",
                desc: "Ball mills, heavy jaw crushers, and shaking tables operational on hard-rock gold claims.",
                tag: "Mining Sector",
              },
              {
                region: "Greater Harare",
                focus: "Boom Concrete Pumping",
                desc: "37m truck-mounted pumps deployed on high-rise commercial structures and bridge decks.",
                tag: "Construction Hire",
              },
              {
                region: "Norton & Marondera",
                focus: "Commercial Hammer Mills",
                desc: "1-tonne/hr feed processing and mixing plants supplying poultry and cattle rations.",
                tag: "Agribusiness",
              },
              {
                region: "Mazowe & Bindura",
                focus: "Tailings & Slurry Plants",
                desc: "Centrifugal concentrators and slurry pumps maximizing fine-gold recovery.",
                tag: "Mineral Extraction",
              },
            ].map((hub) => (
              <div
                key={hub.region}
                className="flex flex-col justify-between rounded-xl bg-white p-5 border border-slate-200/90 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{hub.region}</span>
                    <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-sm">
                      {hub.tag}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-slate-800">{hub.focus}</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{hub.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <CheckCircle2 className="size-3.5" />
                  <span>Site Commissioned</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Multi-Channel Contact & Tender Strip */}
      <section className="border-t border-slate-200/80 bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need pricing or plant availability today?
              </h3>
              <p className="mt-1 max-w-lg text-sm text-slate-300">
                Contact the Harare Cranborne engineering desk directly through official verified channels.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href={whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote.")}>
                <WhatsAppBadge label="WhatsApp +263 77 733 4569" />
              </a>
              <a href={`mailto:${site.email}`}>
                <GmailBadge label={site.email} />
              </a>
              <a href={site.address.maps} target="_blank" rel="noopener noreferrer">
                <GoogleMapsBadge label="Cranborne Yard Map" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
