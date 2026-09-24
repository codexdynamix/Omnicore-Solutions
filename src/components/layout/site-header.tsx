import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, services, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:h-16 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/mark.png" alt="" className="size-8 object-contain sm:size-9" />
          <span className="truncate text-[15px] font-semibold tracking-tight">
            {site.shortName}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/services"
                ? pathname === "/services" ||
                  (pathname.startsWith("/services/") && pathname !== "/services/hire")
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            const className = cn(
              "rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            );
            if (item.href === "/services/hire") {
              return (
                <Link
                  key={item.href}
                  to="/services/$slug"
                  params={{ slug: "hire" }}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link key={item.href} to={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Button asChild size="sm">
            <Link to="/quote">
              <span className="sm:hidden">Quote</span>
              <span className="hidden sm:inline">Get a quote</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((item) =>
              item.href === "/services/hire" ? (
                <Link
                  key={item.href}
                  to="/services/$slug"
                  params={{ slug: "hire" }}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ),
            )}
            <p className="mt-2 px-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Service lines
            </p>
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {service.title}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <Link to="/quote" onClick={() => setOpen(false)}>
                Get a quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
