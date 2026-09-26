import { Link } from "@tanstack/react-router";
import { site, services, whatsappUrl } from "@/data/site";
import { WhatsAppBadge, GmailBadge, GoogleMapsBadge } from "@/components/ui/official-badges";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-[#f5f5f7] text-[#86868b]">
      {/* Upper clean contact bar */}
      <div className="border-b border-black/[0.06] py-8 px-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase">
              Harare Machinery Desk · Cranborne Yard
            </p>
            <p className="mt-0.5 text-xs text-[#86868b]">
              Direct supply, plant hire, and on-site commissioning across Zimbabwe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a href={whatsappUrl("Hello Omnicore — I need a machinery quote.")}>
              <WhatsAppBadge label="WhatsApp +263 77 733 4569" />
            </a>
            <a href={site.address.maps} target="_blank" rel="noopener noreferrer">
              <GoogleMapsBadge label="View Yard on Maps" />
            </a>
            <a href={`mailto:${site.email}`}>
              <GmailBadge label="Email Desk" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        {/* Brand column */}
        <div className="md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <img
              src="/mark.png"
              alt="Omnicore Solutions Logo"
              className="size-8 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-sm font-semibold tracking-tight text-[#1d1d1f]">
              {site.name}
            </span>
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-[#86868b]">
            Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs">
            <a
              href="https://www.linkedin.com/company/omnicore-solutions-zw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://www.facebook.com/61564314670198"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Divisions */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase">
            Specialized Divisions
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-[#6e6e73] transition-colors hover:text-[#1d1d1f]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase">
            Machinery & Fleet
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            <li>
              <Link to="/catalogue" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                Complete Catalogue
              </Link>
            </li>
            <li>
              <Link
                to="/services/$slug"
                params={{ slug: "hire" }}
                className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                Excavator & Plant Hire Rates
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                Site Deployments
              </Link>
            </li>
            <li>
              <Link to="/insights" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                Field Economics & Guides
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                Request Tender Rate
              </Link>
            </li>
          </ul>
        </div>

        {/* Physical Cranborne Yard */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase">
            Cranborne Yard
          </p>
          <div className="mt-3 space-y-2 text-xs text-[#86868b]">
            <p className="text-[#1d1d1f] font-medium">115 Chiremba Rd, Cranborne, Harare</p>
            <p>Mon–Fri: 08:00–17:00 · Sat: 08:00–13:00</p>
            <div className="pt-1 flex flex-col gap-1">
              <a href={`tel:${site.phoneTel}`} className="text-[#1d1d1f] hover:underline">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="text-[#1d1d1f] hover:underline">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/[0.04] py-6 text-center text-[11px] text-[#86868b]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <p>Machinery & Plant Zimbabwe · Cranborne, Harare</p>
        </div>
      </div>
    </footer>
  );
}
