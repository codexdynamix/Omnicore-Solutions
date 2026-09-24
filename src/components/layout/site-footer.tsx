import { Link } from "@tanstack/react-router";
import { site, services, whatsappUrl } from "@/data/site";
import {
  WhatsAppBadge,
  GmailBadge,
  GoogleMapsBadge,
  LinkedInBadge,
  FacebookBadge,
} from "@/components/ui/official-badges";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Banner inside Footer */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-6 px-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              Harare Machinery Desk · Cranborne Yard
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              Need immediate pricing or crane dispatch? Speak with an engineer right now.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a href={whatsappUrl("Hello Omnicore — I need a fast equipment quote.")}>
              <WhatsAppBadge label="WhatsApp +263 77 733 4569" />
            </a>
            <a href={site.address.maps} target="_blank" rel="noopener noreferrer">
              <GoogleMapsBadge label="View on Google Maps" />
            </a>
            <a href={`mailto:${site.email}`}>
              <GmailBadge label="Email Harare Desk" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        {/* Brand identity */}
        <div className="md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3 group">
            {/* White transparent logo - strictly no white tile! */}
            <img
              src="/mark-transparent-white.png"
              alt="Omnicore Solutions Logo"
              className="size-10 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white">
                {site.name}
              </span>
              <span className="text-xs text-slate-400">Engineering & Machinery</span>
            </div>
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            {site.tagline} Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a href="https://www.linkedin.com/company/omnicore-solutions-zw/" target="_blank" rel="noopener noreferrer">
              <LinkedInBadge compact label="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/61564314670198" target="_blank" rel="noopener noreferrer">
              <FacebookBadge compact label="Facebook" />
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Service Lines
          </p>
          <ul className="mt-4 space-y-2 text-xs">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-slate-300 transition-colors hover:text-white hover:underline"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Equipment & Company */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Equipment & Plant
          </p>
          <ul className="mt-4 space-y-2 text-xs">
            <li>
              <Link to="/catalogue" className="text-slate-300 hover:text-white hover:underline">
                Complete Machinery Catalogue
              </Link>
            </li>
            <li>
              <Link
                to="/services/$slug"
                params={{ slug: "hire" }}
                className="text-slate-300 hover:text-white hover:underline"
              >
                Excavator & Plant Hire Rates
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-slate-300 hover:text-white hover:underline">
                Zimbabwe Site Deployments
              </Link>
            </li>
            <li>
              <Link to="/insights" className="text-slate-300 hover:text-white hover:underline">
                Technical Plant Insights
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-slate-300 hover:text-white hover:underline">
                Request Tender / Price Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Harare Yard Desk */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Harare Desk & Yard
          </p>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
            <li className="text-slate-200">
              <span className="font-semibold text-white block">Physical Yard:</span>
              {site.address.line1}, {site.address.line2}
            </li>
            <li>
              <span className="block text-slate-400">Hours: Mon–Fri 08:00–17:00 | Sat 08:00–13:00</span>
            </li>
            <li className="pt-1 flex flex-col gap-1.5">
              <a
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white"
                href={`tel:${site.phoneTel}`}
              >
                <span className="text-amber-400">Direct Call:</span> {site.phoneDisplay}
              </a>
              <a
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white"
                href={`mailto:${site.email}`}
              >
                <span className="text-sky-400">Direct Email:</span> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-slate-950 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {currentYear} {site.name}. Cranborne, Harare, Zimbabwe. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Zimbabwe Registration</span>
            <span>·</span>
            <span>Heavy Equipment & Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
