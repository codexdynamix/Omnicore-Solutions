import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services, whatsappUrl } from "@/data/site";
import { WhatsAppBadge } from "@/components/ui/official-badges";

const intents = ["Buy", "Hire", "Both", "Not sure"] as const;

type QuoteFormProps = {
  defaultService?: string;
  compact?: boolean;
};

export function QuoteForm({ defaultService = "" }: QuoteFormProps) {
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [selectedIntent, setSelectedIntent] = useState<string>("Buy");
  const [selectedService, setSelectedService] = useState<string>(defaultService);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      service: selectedService || String(form.get("service") ?? "").trim(),
      intent: selectedIntent,
      message: String(form.get("message") ?? "").trim(),
      location: String(form.get("location") ?? "").trim(),
      at: new Date().toISOString(),
    };

    try {
      localStorage.setItem("omnicore-last-quote", JSON.stringify(payload));
    } catch {
      /* private mode */
    }

    const text = [
      `Hello Omnicore Harare Desk, I need a machinery quote.`,
      `Name: ${payload.name || "Client"}.`,
      `Requirement: ${payload.intent}.`,
      payload.service ? `Category: ${payload.service}.` : "",
      payload.location ? `Site/Location: ${payload.location}.` : "",
      payload.message ? `Details: ${payload.message}.` : "",
      payload.phone ? `Phone: ${payload.phone}` : "",
      payload.email ? `Email: ${payload.email}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappUrl(text);
    setWaUrl(url);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-md animate-in fade-in zoom-in-95 duration-200">
        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="size-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
          Ready to Send on WhatsApp
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Your machinery inquiry has been formatted. Click below to launch your chat with the Omnicore Harare engineering desk.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={waUrl}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-xs hover:bg-[#20bd5a] transition-colors"
          >
            <WhatsAppBadge compact label="Continue on WhatsApp" />
          </a>

          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors py-1"
          >
            ← Modify inquiry details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col rounded-xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Request an Equipment Quote
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Direct response from Cranborne desk with stock status & rates.
          </p>
        </div>
        <WhatsAppBadge compact label="Instant Quoting" />
      </div>

      <div className="mt-6 space-y-4">
        {/* Name and Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="quote-name" className="text-xs font-semibold text-slate-700">
              Your Name / Company *
            </Label>
            <Input
              id="quote-name"
              name="name"
              required
              placeholder="e.g. Tendai Moyo / Mazowe Mining Co."
              className="rounded-lg text-sm border-slate-200 focus:border-sky-500"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="quote-phone" className="text-xs font-semibold text-slate-700">
              WhatsApp / Mobile Phone *
            </Label>
            <Input
              id="quote-phone"
              name="phone"
              type="tel"
              required
              placeholder="+263 7..."
              className="rounded-lg text-sm border-slate-200 focus:border-sky-500"
            />
          </div>
        </div>

        {/* Intent Select (Buy / Hire / Both) */}
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-700">Inquiry Type</Label>
          <div className="grid grid-cols-4 gap-2">
            {intents.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedIntent(item)}
                className={`h-9 rounded-md text-xs font-medium transition-colors border ${
                  selectedIntent === item
                    ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Service Line Selection */}
        <div className="space-y-1.5">
          <Label htmlFor="quote-service" className="text-xs font-semibold text-slate-700">
            Machinery Category
          </Label>
          <select
            id="quote-service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-2xs focus:border-sky-500 focus:outline-hidden"
          >
            <option value="">Select machinery line...</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title} ({service.eyebrow})
              </option>
            ))}
          </select>
        </div>

        {/* Site Location */}
        <div className="space-y-1.5">
          <Label htmlFor="quote-location" className="text-xs font-semibold text-slate-700">
            Site / Delivery Location (in Zimbabwe)
          </Label>
          <Input
            id="quote-location"
            name="location"
            placeholder="e.g. Kadoma Gold Claim, Norton Farm, Borrowdale Site"
            className="rounded-lg text-sm border-slate-200 focus:border-sky-500"
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="quote-message" className="text-xs font-semibold text-slate-700">
            Machine Specifications / Tonnes / Pour Volume
          </Label>
          <Textarea
            id="quote-message"
            name="message"
            rows={3}
            placeholder="Describe the machine you need, tonnes per hour, duration of hire or power requirements..."
            className="rounded-lg text-sm border-slate-200 focus:border-sky-500 resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-6 h-11 w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xs"
      >
        <Send className="size-4 mr-2" />
        Generate Quote on WhatsApp
      </Button>

      <p className="mt-3 text-center text-[11px] text-slate-500">
        Strict confidentiality. No spam. Quoted directly by Harare engineering staff.
      </p>
    </form>
  );
}
