import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  label?: string;
  compact?: boolean;
}

/** Official WhatsApp Badge with authentic icon and #25D366 brand color */
export function WhatsAppBadge({ className, label = "WhatsApp", compact = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-transform duration-150 active:scale-95",
        "bg-[#25D366] text-white shadow-xs hover:bg-[#20bd5a]",
        compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        className,
      )}
    >
      <svg className="size-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.396-10.416c-5.518 0-10 4.482-10 10 0 1.911.537 3.699 1.468 5.228l-1.535 5.606 5.759-1.51c1.474.839 3.182 1.314 4.996 1.314 5.518 0 10-4.482 10-10s-4.482-10-10-10z" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

/** Official Gmail Badge with authentic Google colors and envelope icon */
export function GmailBadge({ className, label = "Gmail", compact = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-transform duration-150 active:scale-95",
        "bg-white text-slate-800 border border-slate-200 shadow-2xs hover:border-slate-300",
        compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        className,
      )}
    >
      <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22 6.5l-10 7.5L2 6.5V19c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.5z"
        />
        <path
          fill="#EA4335"
          d="M2 5v1.5l10 7.5 10-7.5V5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z"
        />
        <path fill="#FBBC05" d="M2 6.5L12 14 2 20V6.5z" opacity="0.3" />
        <path fill="#34A853" d="M22 6.5L12 14l10 6V6.5z" opacity="0.3" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

/** Official Google Maps Pin Badge */
export function GoogleMapsBadge({ className, label = "Google Maps", compact = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-transform duration-150 active:scale-95",
        "bg-[#4285F4] text-white shadow-2xs hover:bg-[#3367d6]",
        compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        className,
      )}
    >
      <svg className="size-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

/** Official LinkedIn Badge */
export function LinkedInBadge({ className, label = "LinkedIn", compact = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-transform duration-150 active:scale-95",
        "bg-[#0A66C2] text-white shadow-2xs hover:bg-[#084e96]",
        compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        className,
      )}
    >
      <svg className="size-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

/** Official Facebook Badge */
export function FacebookBadge({ className, label = "Facebook", compact = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-transform duration-150 active:scale-95",
        "bg-[#1877F2] text-white shadow-2xs hover:bg-[#1565d8]",
        compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        className,
      )}
    >
      <svg className="size-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

/** Direct Telephone Calling Badge */
export function PhoneBadge({ className, label, compact = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-transform duration-150 active:scale-95",
        "bg-slate-900 text-white shadow-2xs hover:bg-slate-800",
        compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        className,
      )}
    >
      <svg className="size-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      <span>{label || "Call Desk"}</span>
    </span>
  );
}
