import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig, type Service, type Project } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Globe,
  Lightbulb,
  MonitorSmartphone,
  Quote,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";

/* ------------------------------------------------------------------ */
/*  Hero visual — a stylized AI product console                        */
/* ------------------------------------------------------------------ */
function HeroVisual() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(50%_50%_at_50%_30%,oklch(0.5_0.155_264/0.18),transparent_70%)] blur-2xl"
      />

      {/* Floating badges */}
      <div className="absolute -left-4 top-10 z-20 hidden animate-[float_6s_ease-in-out_infinite] rounded-xl border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-2">
        <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Bot className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold">AI Chatbot</p>
          <p className="text-[10px] text-muted-foreground">Live on your site</p>
        </div>
      </div>
      <div className="absolute -right-3 bottom-16 z-20 hidden animate-[float_7s_ease-in-out_infinite_reverse] rounded-xl border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-2">
        <span className="inline-flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
          <Globe className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold">SEO Ready</p>
          <p className="text-[10px] text-muted-foreground">Built to be found</p>
        </div>
      </div>

      {/* Console card */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-muted/50 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 hidden rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground sm:block">
            sauravsingh.dev — AI Product Console
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.2fr_1fr]">
          {/* Chat panel */}
          <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-background/60 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex size-5 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Sparkles className="size-3" />
              </span>
              AI Assistant — trained on your business
            </div>
            <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-border bg-card px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              Hi! I can share pricing, services and availability. How can I help?
            </div>
            <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-primary px-3 py-2 text-xs leading-relaxed text-primary-foreground">
              Do you build AI chatbots for real estate businesses?
            </div>
            <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-border bg-card px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              Yes — trained on your listings and FAQs, qualifying leads 24/7. Want to see an example?
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                <Check className="size-2.5" />
              </span>
              Hot lead captured — sent to WhatsApp
            </div>
          </div>

          {/* Metrics panel */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/70 bg-background/60 p-3">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Leads this week
                </p>
                <p className="font-display mt-1 text-xl font-semibold">47</p>
                <p className="text-[10px] text-emerald-600">+18% vs last week</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/60 p-3">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Queries resolved
                </p>
                <p className="font-display mt-1 text-xl font-semibold">92%</p>
                <p className="text-[10px] text-muted-foreground">by the AI bot</p>
              </div>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Product roadmap
                </p>
                <span className="text-[10px] font-semibold text-primary">MVP</span>
              </div>
              <ul className="mt-2 flex flex-col gap-1.5 text-[11px] text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary" /> Discovery & PRD
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary" /> Core build
                </li>
                <li className="flex items-center gap-1.5 text-muted-foreground/60">
                  <span className="size-3.5 rounded-full border border-border" /> AI features
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-night px-3 py-2.5 text-night-foreground">
              <Smartphone className="size-4 text-primary-foreground/70" />
              <p className="text-[11px] font-medium">Mobile-first · Fast · Conversion-ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section pieces                                                     */
/* ------------------------------------------------------------------ */
function TrustStrip() {
  const items = [
    "Startups & SaaS",
    "Local Businesses",
    "Coaching Institutes",
    "Real Estate",
    "Restaurants",
    "E-commerce",
  ];
  return (
    <section className="border-y border-border/60 bg-muted/40 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by ambitious businesses across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="font-display text-sm font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "AI Product Management",
      text: "Turn raw ideas into structured products — requirements, PRDs, feature plans and MVP roadmaps that remove guesswork.",
      href: "/ai-product-management",
    },
    {
      icon: MonitorSmartphone,
      title: "Website Development",
      text: "Premium business websites, landing pages and redesigns — fast, mobile-first, SEO-ready and built to convert visitors.",
      href: "/website-development",
    },
    {
      icon: Workflow,
      title: "AI & Business Automation",
      text: "AI chatbots, intelligent lead capture and workflow automation that save you hours and never miss a customer.",
      href: "/services",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="One partner for your entire digital product"
          description="From the first product idea to a launched, AI-powered website — I plan, design and build it end to end."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link
                to={p.href}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <Link
        to={`/services#${service.slug}`}
        className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="size-5" />
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all group-hover:text-primary" />
        </div>
        <h3 className="font-display text-base font-semibold tracking-tight">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <ul className="mt-auto flex flex-col gap-1.5 pt-1">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </Link>
    </Reveal>
  );
}

function WhyChooseMe() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/40 py-20 sm:py-24">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Me"
          title="Built like a product studio, run by one accountable expert"
          description="You don't get a faceless agency or a random freelancer. You get one person who owns the outcome from strategy to launch."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.whyChooseMe.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <w.icon className="size-5" />
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Development Process"
          title="A clear path from idea to launch"
          description="No surprises, no black box. You always know what's happening and what's next."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.process.map((step, i) => (
            <Reveal key={step.step} delay={(i % 3) * 0.08}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                <span className="font-display absolute right-5 top-5 text-3xl font-bold text-primary/15">
                  {step.step}
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/process">
              See the full process
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent packages with a fixed quote"
          description={siteConfig.pricingNote}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {siteConfig.pricing.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08} className="h-full">
              <Card
                className={`relative flex h-full flex-col shadow-none ${
                  plan.highlighted
                    ? "border-primary/40 bg-card shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-lg tracking-tight">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground">{plan.priceSuffix}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5">
                  <ul className="flex flex-col gap-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "outline"}
                    className="mt-auto w-full"
                  >
                    <Link to={`/contact?projectType=${encodeURIComponent(plan.name)}`}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="link" className="text-base">
            <Link to="/pricing">
              Compare all packages & enterprise pricing
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="h-full">
      <Link
        to="/portfolio"
        className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary" className="rounded-full">
            {project.type}
          </Badge>
          <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all group-hover:text-primary" />
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </Link>
    </Reveal>
  );
}

function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say about working with me"
          description="Real feedback from real projects — I'll add more as projects complete."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <Quote className="size-6 text-primary/40" />
                <blockquote className="text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, answered"
          description="Everything clients usually ask before starting a project."
        />
        <Accordion type="single" collapsible className="w-full">
          {siteConfig.faqs.slice(0, 6).map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/faq">
              View all questions
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Landing() {
  usePageMeta(
    "AI Product Manager & Website Developer",
    siteConfig.description,
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-border/60 bg-grid">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_-10%,oklch(0.5_0.155_264/0.14),transparent_70%)]"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <Sparkles className="size-3.5" />
                AI Product Manager · Website Developer
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                Building AI-Powered Digital Products That{" "}
                <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.14_275)] bg-clip-text text-transparent">
                  Grow Your Business.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I help businesses turn ideas into professional websites, AI-powered products, and
                digital experiences designed to attract customers and generate real business
                results.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2.5">
                {siteConfig.trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                    <span className="inline-flex size-4.5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <Check className="size-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pl-4">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <TrustStrip />
      <WhatIDo />

      {/* ============ SERVICES ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to launch and grow"
            description="Eight focused services covering websites, AI products, chatbots and automation — pick one or combine them."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore all services in detail
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseMe />
      <ProcessSection />
      <PricingPreview />

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured projects"
            description="Concept and demo builds showing the range of websites, AI products and interfaces I create."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {siteConfig.projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/portfolio">
                View the full portfolio
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />
      <FaqPreview />

      {/* ============ FINAL CTA ============ */}
      <CtaBand />

      {/* Keyframes for floating hero badges */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
}
