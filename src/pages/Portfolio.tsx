import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, Check, Target } from "lucide-react";
import { Link } from "react-router";

const accentMap: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-600",
  slate: "bg-slate-500/10 text-slate-600",
  amber: "bg-amber-500/10 text-amber-600",
  emerald: "bg-emerald-500/10 text-emerald-600",
  violet: "bg-violet-500/10 text-violet-600",
};

export default function Portfolio() {
  usePageMeta(
    "Portfolio — Websites, AI Products & Interfaces",
    "A portfolio of concept and demo builds: AI assistants, business websites, landing pages, dashboards and more — showing the range of work I create.",
  );

  return (
    <>
      <PageHeader
        crumb="Portfolio"
        eyebrow="Portfolio"
        title="Work that shows what's possible"
        description="A selection of concept and demo builds demonstrating the websites, AI products and interfaces I create. Your project starts from a blank canvas — designed around your business."
      >
        <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Concept / Demo builds — your project will be designed to your brand
        </span>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 0.06} className="h-full">
                <article className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Visual header */}
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary" className="rounded-full px-3 py-1">
                      {project.type}
                    </Badge>
                    <span
                      className={`rounded-lg px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wide ${
                        accentMap[project.accent] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.id.split("-")[0]} demo
                    </span>
                  </div>

                  <div>
                    <h2 className="font-display text-xl font-semibold tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-muted/40 p-3.5">
                    <Target className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">Objective: </span>
                      {project.objective}
                    </p>
                  </div>

                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-1 text-primary hover:text-primary"
                    >
                      <Link to={`/contact?projectType=${encodeURIComponent(project.type)}`}>
                        Build something like this
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/[0.03] px-6 py-10 text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Want to see your project here?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Share your business and goals. I'll scope the project and show you what a
                professional, AI-ready build could look like for you.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Project
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
