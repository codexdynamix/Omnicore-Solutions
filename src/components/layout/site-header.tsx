import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppBadge } from "@/components/ui/official-badges";
import { nav, services, site, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Top Engineering & Dispatch Status Bar */}
      <div className="border-b border-slate-200/80 bg-slate-900 px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium text-white">Harare Yard Open</span>
            <span className="text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300">115 Chiremba Rd, Cranborne</span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-400">Dispatch Nationwide</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl("Hello Omnicore Harare Desk — I would like a machinery quote.")}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-emerald-400 transition-colors"
            >
              <WhatsAppBadge compact label="+263 77 733 4569" />
              <span className="hidden lg:inline text-slate-400">Replies &lt;15m</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md shadow-2xs">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Brand Logo - Completely free of white tiles, clean transparent rendering */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 py-1"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex size-10 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src="/mark.png"
                alt="Omnicore Solutions"
                className="size-9 object-contain drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                {site.shortName}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium text-slate-500 -mt-0.5 truncate">
                Machinery & Plant Zimbabwe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/services"
                  ? pathname === "/services" ||
                    (pathname.startsWith("/services/") && pathname !== "/services/hire")
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const className = cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150 relative",
                active
                  ? "text-slate-950 font-semibold bg-slate-100"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50",
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

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote.")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#20bd5a] hover:shadow-sm active:scale-95"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.396-10.416c-5.518 0-10 4.482-10 10 0 1.911.537 3.699 1.468 5.228l-1.535 5.606 5.759-1.51c1.474.839 3.182 1.314 4.996 1.314 5.518 0 10-4.482 10-10s-4.482-10-10-10z" />
              </svg>
              <span>Instant Chat</span>
            </a>

            <Button asChild size="sm" className="rounded-lg shadow-xs bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              <Link to="/quote">
                <span>Request Quote</span>
                <ArrowUpRight className="size-3.5 ml-1" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg text-slate-700"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open ? (
          <div className="border-t border-border bg-white px-4 py-4 lg:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {nav.map((item) =>
                item.href === "/services/hire" ? (
                  <Link
                    key={item.href}
                    to="/services/$slug"
                    params={{ slug: "hire" }}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <div className="pt-2 pb-1">
                <p className="px-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Service Lines
                </p>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-slate-400">{service.eyebrow}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <Button asChild className="w-full rounded-lg bg-slate-900 text-white font-medium">
                  <Link to="/quote" onClick={() => setOpen(false)}>
                    Get a Machinery Quote
                  </Link>
                </Button>
                <a
                  href={whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote.")}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 text-xs font-semibold text-white shadow-xs"
                >
                  <WhatsAppBadge compact label="Chat on WhatsApp" />
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
