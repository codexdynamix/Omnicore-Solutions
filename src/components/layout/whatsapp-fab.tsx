import { useRouterState } from "@tanstack/react-router";
import { whatsappUrl } from "@/data/site";

export function WhatsappFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/quote" || pathname === "/contact") return null;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed right-4 bottom-5 z-40 sm:right-6 sm:bottom-6">
      <a
        href={whatsappUrl("Hello Omnicore Harare Desk — I would like an equipment quote.")}
        aria-label="Chat on WhatsApp with Harare Desk"
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] py-2.5 pr-4 pl-3 text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-200 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] active:scale-95"
      >
        {/* Pulsing radar ring */}
        <span className="relative flex size-9 items-center justify-center rounded-full bg-white/20">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-50" />
          <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.396-10.416c-5.518 0-10 4.482-10 10 0 1.911.537 3.699 1.468 5.228l-1.535 5.606 5.759-1.51c1.474.839 3.182 1.314 4.996 1.314 5.518 0 10-4.482 10-10s-4.482-10-10-10z" />
          </svg>
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-none">WhatsApp Desk</span>
          <span className="text-[10px] text-white/90 leading-tight">Online · Harare</span>
        </div>
      </a>
    </aside>
  );
}
