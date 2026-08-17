import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GitBranch,
  ListChecks,
  Lightbulb,
  Route,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const deliverables = [
  {
    icon: Lightbulb,
    title: "Product Idea Analysis",
    text: "Is the idea viable? Who is it for, what problem does it solve, and how would it make money? Structured analysis before anything is built.",
  },
  {
    icon: Users,
    title: "User Research & Problem Analysis",
    text: "Clarity on your target users, their pain points and the jobs they need done — so the product solves a real problem, not a guessed one.",
  },
  {
    icon: ClipboardList,
    title: "Product Requirements & PRD",
    text: "A build-ready product requirements document: features, scope, acceptance criteria and what's explicitly out of scope.",
  },
  {
    icon: ListChecks,
    title: "Feature Planning & Prioritization",
    text: "Every feature assessed for value, effort and risk — so you build what matters first and skip what doesn't.",
  },
  {
    icon: Route,
    title: "User Flows & Roadmap",
    text: "The journeys your users will take, mapped end to end, with a phased roadmap showing what ships when.",
  },
  {
    icon: GitBranch,
    title: "MVP Plan & AI Feature Design",
    text: "A minimum viable product scope, plus which AI features genuinely add value — and how they work in your product.",
  },
];

const aiExamples = [
  {
    title: "AI Chatbots & Assistants",
    text: "Customer support, lead qualification and sales assistants trained on your business.",
  },
  {
    title: "Intelligent Search & Recommendations",
    text: "Help users find the right product, content or answer faster with smarter ranking.",
  },
  {
    title: "Automated Content & Summaries",
    text: "Draft descriptions, reports or summaries that save your team hours every week.",
  },
  {
    title: "Data Insights & Prediction",
    text: "Turn your business data into decisions with AI-powered analysis and forecasting.",
  },
];

export default function AIPM() {
  usePageMeta(
    "AI Product Management — From Idea to Build-Ready Product",
    "AI product management services: idea analysis, user research, PRD creation, feature prioritization, MVP planning and AI feature design.",
  );

  return (
    <>
      <PageHeader
        crumb="AI Product Management"
        eyebrow="AI Product Management"
        title="Turn your idea into a product that's ready to build"
        description="You have an idea, or a vague problem. I structure it: requirements, PRDs, feature priorities, user flows and an MVP plan — so you know exactly what to build, why, and in what order."
      >
        <Button asChild size="lg">
          <Link to="/contact?projectType=AI%20Product%20Management">
            Plan My Product
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </PageHeader>

      {/* Deliverables */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="What You Get"
            title="A complete product blueprint"
            description="Everything below is delivered as clear, usable documents — not vague slideware."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-border/60 bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="Who It's For"
              title="AI Product Management is for you if…"
            />
            <ul className="flex flex-col gap-3 pt-2">
              {[
                "You have a product idea but don't know where to start or what it should include.",
                "You want to build an AI product but aren't sure which AI features are worth it.",
                "A developer or agency quoted you, but there's no clear requirements or scope.",
                "You're raising funds or pitching — and need a credible product plan and roadmap.",
                "You keep building features that don't seem to matter to customers.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="How It Works"
              title="What a typical engagement looks like"
            />
            <ol className="flex flex-col gap-4 pt-2">
              {[
                { t: "Discovery call", d: "We clarify your idea, market and goals — 45 minutes, free." },
                { t: "Analysis & research", d: "User research, market context and feasibility for your idea." },
                { t: "Requirements & PRD", d: "A structured product requirements document you can build from." },
                { t: "MVP & roadmap", d: "Feature priorities, MVP scope, user flows and a phased roadmap." },
                { t: "Build-ready handover", d: "Hand the blueprint to any developer — or I build it for you." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="font-display flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{step.t}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* AI features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="AI Features Done Right"
            title="Where AI actually adds value to your product"
            description="AI for the sake of AI wastes money. These are the patterns that consistently create real business value."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {aiExamples.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-semibold tracking-tight">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services overlap */}
      <section className="border-t border-border/60 bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <SectionHeading
            eyebrow="Also Part of This"
            title="Product planning is the foundation of every build"
            description="The same product-thinking powers the websites and AI products I develop — requirements first, then design and code."
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/website-development">Website Development</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">All Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/process">My Process</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand title="Have an idea worth building?" />
    </>
  );
}
