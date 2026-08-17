import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Services() {
  usePageMeta(
    "Services — Websites, AI Products, Chatbots & Automation",
    "Explore all services: business websites, AI website development, AI product management, AI chatbots, landing pages, redesigns, automation and MVP development.",
  );

  // If someone lands on /services#ai-website etc., scroll to that service card.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="Services"
        title="Services built to grow your business"
        description="Eight focused services across websites, AI products, chatbots and automation — each one planned, designed and delivered with business outcomes in mind."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(i % 2) * 0.06} className="h-full">
                  <div
                    id={service.slug}
                    className="flex h-full scroll-mt-28 flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold tracking-tight">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.short}
                      </p>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                      <Button asChild>
                        <Link
                          to={`/contact?projectType=${encodeURIComponent(service.projectType)}`}
                        >
                          Discuss This Service
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost">
                        <Link to="/pricing">See pricing</Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Deep-dive cards */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-night p-8 text-night-foreground">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  AI Product Management
                </h3>
                <p className="text-sm leading-relaxed text-night-muted">
                  From a raw idea to a build-ready product: idea analysis, user research, product
                  requirements, PRDs, feature prioritization and MVP planning — the structured
                  thinking your product needs before code.
                </p>
                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    className="bg-white/10 text-night-foreground hover:bg-white/15"
                  >
                    <Link to="/ai-product-management">
                      Explore AI Product Management
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Website Development
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Business websites, AI-powered sites, landing pages and redesigns — mobile-first,
                  fast, SEO-ready and wired with contact forms, WhatsApp and the integrations your
                  business actually needs.
                </p>
                <div className="mt-auto pt-2">
                  <Button asChild variant="outline">
                    <Link to="/website-development">
                      Explore Website Development
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/[0.03] px-6 py-10 text-center">
              <SectionHeading
                align="center"
                eyebrow="Not sure what you need?"
                title="Describe your business — I'll recommend the right service"
                description="Every engagement starts with a free discovery conversation. Tell me your goals and I'll map them to the right scope, package and price."
              />
              <Button asChild size="lg">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
