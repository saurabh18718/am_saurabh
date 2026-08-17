import { Logo } from "@/components/site/Logo";
import { siteConfig, waLink } from "@/config/site";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const serviceLinks = [
  { label: "AI Product Management", href: "/ai-product-management" },
  { label: "Website Development", href: "/website-development" },
  { label: "All Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-night text-night-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" aria-label="Saurav Singh — home">
              <Logo dark />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-night-muted">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="text-sm font-semibold">in</span>
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="text-sm font-semibold">IG</span>
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="text-sm font-semibold">YT</span>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-night-foreground/90">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="inline-flex items-center gap-1 text-sm text-night-muted transition-colors hover:text-night-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-night-foreground/90">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-night-muted transition-colors hover:text-night-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-night-foreground/90">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-night-muted">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-night-foreground"
                >
                  <MessageCircle className="size-4 shrink-0 text-primary-foreground/70" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-night-foreground"
                >
                  <Mail className="size-4 shrink-0 text-primary-foreground/70" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-foreground/70" />
                {siteConfig.location}
              </li>
            </ul>
            <a
              href={waLink("Hello Saurav, I would like to discuss a project with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-night-foreground transition-colors hover:bg-white/15"
            >
              Discuss Your Project
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-night-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="transition-colors hover:text-night-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
