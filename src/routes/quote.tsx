import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/data/site";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote | Omnicore Solutions Harare" },
      {
        name: "description",
        content:
          "Request a machinery quote from Omnicore Solutions. WhatsApp-first quoting for sale and hire across Zimbabwe.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Quote
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Send the job. Get a number.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Sale or hire. Wet or dry. We reply on WhatsApp with stock, freight and a rate you can
            put in a tender — not a brochure.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>{site.phoneDisplay} · WhatsApp and calls</li>
            <li>{site.email}</li>
            <li>
              {site.address.line1}, {site.address.line2}
            </li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}
