import { MessageCircle } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { whatsappUrl } from "@/data/site";

export function WhatsappFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/quote" || pathname === "/contact") return null;

  return (
    <a
      href={whatsappUrl("Hello Omnicore — I would like a quote.")}
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-5 z-30 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_8px_24px_rgba(31,138,76,0.35)] transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-5 sm:bottom-6"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
