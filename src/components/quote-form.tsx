import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services, whatsappUrl } from "@/data/site";

const intents = ["Buy", "Hire", "Both", "Not sure"] as const;

type QuoteFormProps = {
  defaultService?: string;
  compact?: boolean;
};

export function QuoteForm({ defaultService = "", compact = false }: QuoteFormProps) {
  const [sent, setSent] = useState(false);
  const [wa, setWa] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      service: String(form.get("service") ?? "").trim(),
      intent: String(form.get("intent") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
      at: new Date().toISOString(),
    };
    try {
      localStorage.setItem("omnicore-last-quote", JSON.stringify(payload));
    } catch {
      /* private mode */
    }
    const text = [
      `Hello Omnicore, I'm ${payload.name}.`,
      payload.intent ? `Intent: ${payload.intent}.` : "",
      payload.service ? `Service: ${payload.service}.` : "",
      payload.message,
      payload.phone ? `Phone: ${payload.phone}` : "",
      payload.email ? `Email: ${payload.email}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    const url = whatsappUrl(text);
    setWa(url);
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-card p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
        <div className="flex size-10 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
          <Check className="size-5" />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">Quote started on WhatsApp</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          If a new chat did not open, use the button below. We typically reply the same working day.
        </p>
        <Button asChild variant="whatsapp" className="mt-6">
          <a href={wa}>Open WhatsApp</a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:p-8"
    >
      {!compact ? (
        <div className="mb-6">
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            WhatsApp-first quoting
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Tell us the job.</h2>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="07…"
          />
        </Field>
        <Field label="Email (optional)" htmlFor="email" className="sm:col-span-2">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.co.zw"
          />
        </Field>
        <Field label="Service line" htmlFor="service">
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            className="flex h-11 w-full rounded-xl bg-card px-3.5 text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-background),0_0_0_4px_var(--color-ring)]"
          >
            <option value="">Select…</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Catalogue item">Something in the catalogue</option>
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Buy or hire" htmlFor="intent">
          <select
            id="intent"
            name="intent"
            defaultValue="Not sure"
            className="flex h-11 w-full rounded-xl bg-card px-3.5 text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-background),0_0_0_4px_var(--color-ring)]"
          >
            {intents.map((intent) => (
              <option key={intent} value={intent}>
                {intent}
              </option>
            ))}
          </select>
        </Field>
        <Field label="What do you need?" htmlFor="message" className="sm:col-span-2">
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Machine, site, dates, tonnes or cubic metres — whatever you know."
          />
        </Field>
      </div>

      <Button type="submit" className="mt-6 w-full sm:w-auto" size="lg">
        Send via WhatsApp
      </Button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Opens WhatsApp with your message. Indicative catalogue prices are confirmed before any payment.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-1.5 block">
        {label}
      </Label>
      {children}
    </div>
  );
}
