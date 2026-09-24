import { Badge } from "@/components/ui/badge";
import { MediaImage } from "@/components/media-image";
import { type Equipment, whatsappUrl } from "@/data/site";

export function EquipmentCard({ item }: { item: Equipment }) {
  const message = `Hello Omnicore, I'm interested in the ${item.name} (${item.intent === "hire" ? "hire" : "purchase"}).`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <MediaImage
          src={item.image}
          alt={item.imageAlt}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Badge variant={item.intent === "hire" ? "default" : "muted"}>
            {item.intent === "hire" ? "Hire" : "Sale"}
          </Badge>
          {item.badge ? <Badge variant="outline">{item.badge}</Badge> : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {item.spec ?? item.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-sm font-medium">{item.price ?? item.priceNote ?? "Quote on request"}</p>
          <a href={whatsappUrl(message)} className="text-sm font-medium text-accent hover:underline">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
