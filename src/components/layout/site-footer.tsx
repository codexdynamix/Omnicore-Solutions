import { Link } from "@tanstack/react-router";
import { site, services, whatsappUrl } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <img src="/mark.png" alt="" className="size-9 object-contain" />
            <span className="text-sm font-semibold tracking-tight">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.tagline} Sale, hire and commissioning from Cranborne, Harare — nationwide.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-sm text-foreground hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/catalogue" className="hover:text-accent">
                Equipment catalogue
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-accent">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="hover:text-accent">
                Get a quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Harare desk
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              {site.address.line1}
              <br />
              {site.address.line2}
            </li>
            <li>
              <a className="text-foreground hover:text-accent" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="text-foreground hover:text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="text-foreground hover:text-accent" href={whatsappUrl()}>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. Harare, Zimbabwe.
          </p>
          <div className="flex gap-4">
            <a href={site.facebook} className="hover:text-foreground">
              Facebook
            </a>
            <a href={site.linkedin} className="hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
