import { MediaImage } from "@/components/media-image";
import { type Equipment, whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/official-badges";

export function EquipmentCard({ item }: { item: Equipment }) {
  const message = `Hello Omnicore, I would like to inquire about the ${item.name} (${item.intent === "hire" ? "Hire" : "Purchase"}). Please provide current availability and pricing.`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-black/[0.06] p-4 transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
      {/* Image with Apple iOS squircle radius */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f7]">
        <MediaImage
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Minimal frosted pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#1d1d1f] shadow-2xs">
            {item.intent === "hire" ? "Plant Hire" : "Direct Supply"}
          </span>
          {item.badge ? (
            <span className="rounded-full border border-black/[0.06] bg-white/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-[#6e6e73]">
              {item.badge}
            </span>
          ) : null}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-4 px-1 pb-1">
        <div className="flex items-center justify-between text-[11px] font-medium text-[#86868b] tracking-wider uppercase">
          <span>{item.spec ?? item.category}</span>
        </div>

        <h3 className="mt-1.5 text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
          {item.name}
        </h3>

        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-[#6e6e73] line-clamp-2">
          {item.blurb}
        </p>

        {/* Price & Refined CTA Button */}
        <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider block">
              {item.intent === "hire" ? "Hire Rate" : "Indicative Price"}
            </span>
            <span className="text-xs font-semibold text-[#1d1d1f]">
              {item.price ?? item.priceNote ?? "Inquire for quote"}
            </span>
          </div>

          <a
            href={whatsappUrl(message)}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1fa855]/12 hover:bg-[#1fa855] text-[#1b7a40] hover:text-white px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95"
            title="Inquire on WhatsApp"
          >
            <WhatsAppIcon className="size-3.5 shrink-0" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
