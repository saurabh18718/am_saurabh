import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
  children?: ReactNode;
}

/** Hero header used at the top of every inner page. */
export function PageHeader({ eyebrow, title, description, crumb, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-grid">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_-10%,oklch(0.5_0.155_264/0.12),transparent_70%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="font-medium text-foreground">{crumb}</span>
        </nav>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </span>
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
