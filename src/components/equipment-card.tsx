import { MediaImage } from "@/components/media-image";
import { type Equipment, whatsappUrl } from "@/data/site";

export function EquipmentCard({ item }: { item: Equipment }) {
  const message = `Hello Omnicore, I would like to inquire about the ${item.name} (${item.intent === "hire" ? "Hire" : "Purchase"}). Please provide current availability and pricing.`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200/85 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
      {/* Image Container with smooth hover zoom */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <MediaImage
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${
              item.intent === "hire"
                ? "bg-amber-500 text-white shadow-2xs"
                : "bg-slate-900 text-white shadow-2xs"
            }`}
          >
            {item.intent === "hire" ? "Plant Hire" : "For Sale"}
          </span>
          {item.badge ? (
            <span className="inline-flex items-center rounded-md bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-800 shadow-2xs backdrop-blur-xs border border-slate-200/50">
              {item.badge}
            </span>
          ) : null}
        </div>

        {/* Live Availability Pin */}
        <div className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Cranborne Yard</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700 uppercase tracking-wider">
            {item.spec ?? item.category}
          </span>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
            Verified Plant
          </span>
        </div>

        <h3 className="mt-2 text-base font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
          {item.name}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
          {item.blurb}
        </p>

        {/* Price and CTA footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-medium tracking-wider block">
              Indicative Price
            </span>
            <span className="text-sm font-bold text-slate-900">
              {item.price ?? item.priceNote ?? "Rate on request"}
            </span>
          </div>

          <a
            href={whatsappUrl(message)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#20bd5a] hover:shadow-xs active:scale-95"
            title="Request official quote on WhatsApp"
          >
            <svg className="size-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.396-10.416c-5.518 0-10 4.482-10 10 0 1.911.537 3.699 1.468 5.228l-1.535 5.606 5.759-1.51c1.474.839 3.182 1.314 4.996 1.314 5.518 0 10-4.482 10-10s-4.482-10-10-10z" />
            </svg>
            <span>Quote</span>
          </a>
        </div>
      </div>
    </article>
  );
}
