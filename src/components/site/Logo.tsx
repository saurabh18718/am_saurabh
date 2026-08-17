import { cn } from "@/lib/utils";

interface LogoProps {
  dark?: boolean;
  className?: string;
}

/** Monogram mark + wordmark. `dark` renders the light variant for night bands. */
export function Logo({ dark = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary to-[oklch(0.42_0.12_268)] font-display text-base font-bold text-primary-foreground shadow-sm">
        SS
        <span className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,oklch(1_0_0/0.25),transparent_50%)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-semibold tracking-tight",
            dark ? "text-night-foreground" : "text-foreground",
          )}
        >
          Saurav Singh
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]",
            dark ? "text-night-muted" : "text-muted-foreground",
          )}
        >
          AI Product Studio
        </span>
      </span>
    </span>
  );
}
