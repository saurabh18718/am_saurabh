import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, CalendarCheck, FileText, MessageCircle, PenTool, Rocket, Search, Wrench } from "lucide-react";
import { Link } from "react-router";
import { waLink } from "@/config/site";

const stepIcons = [Search, FileText, PenTool, Wrench, CalendarCheck, Rocket];

export default function Process() {
  usePageMeta(
    "Process — From Idea to Launch",
    "A clear six-step process: Discovery, Strategy, Design, Development, Testing and Launch. You always know what's happening and what's next.",
  );

  return (
    <>
      <PageHeader
        crumb="Process"
        eyebrow="How I Work"
        title="A process designed for zero surprises"
        description="Six clear stages, constant communication, and a fixed plan before any code is written. You always know what's happening and what's next."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
          {/* Steps */}
          <div className="flex flex-col gap-6">
            {siteConfig.process.map((step, i) => {
              const Icon = stepIcons[i] ?? stepIcons[0];
              return (
                <Reveal key={step.step} delay={0.04}>
                  <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7">
                    {/* Step number rail */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                      <span className="font-display text-4xl font-bold text-primary/20 sm:text-5xl">
                        {step.step}
                      </span>
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:hidden">
                        <Icon className="size-5" />
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="hidden size-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:inline-flex">
                          <Icon className="size-5" />
                        </span>
                        <h2 className="font-display text-xl font-semibold tracking-tight">
                          {step.title}
                        </h2>
                      </div>
                      <p className="mt-2 text-sm font-medium text-primary">{step.description}</p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {step.detail}
                      </p>
                    </div>

                    {i < siteConfig.process.length - 1 && (
                      <ArrowRight className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 text-muted-foreground/40 lg:block" />
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* What to expect */}
          <Reveal>
            <div className="grid gap-5 rounded-2xl bg-night p-8 text-night-foreground sm:p-10 lg:grid-cols-3">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  What you can expect
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-night-muted">
                  Clear communication is part of the deliverable. Here's how we'll work together.
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-night-muted lg:col-span-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                  A written scope and fixed quote before work begins — no surprise invoices.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                  Regular progress updates at each stage, with design and content checkpoints.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                  Everything tested on desktop, tablet and mobile before launch.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                  Post-launch support so the handover is smooth — not an abrupt end.
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col items-center gap-4 pt-2 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Ready to start step one?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 size-4" />
                  Ask a question first
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
