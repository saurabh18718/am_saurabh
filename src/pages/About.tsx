import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig, waLink } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Brain,
  Layers,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const approach = [
  {
    icon: Brain,
    title: "Think first, build second",
    text: "Every project starts with the business problem, the customer and the outcome — not with templates or tech preferences.",
  },
  {
    icon: Target,
    title: "Outcome-driven decisions",
    text: "Design, features and AI are chosen because they win customers, generate leads or save hours — not because they look impressive.",
  },
  {
    icon: Layers,
    title: "Product-grade structure",
    text: "Clear requirements, scoped deliverables and honest timelines. You always know what you're getting and why it matters.",
  },
];

const values = [
  {
    icon: BadgeCheck,
    title: "Honesty",
    text: "Straight answers about scope, cost and timelines — including when something isn't worth building.",
  },
  {
    icon: Users,
    title: "Communication",
    text: "You'll hear from me at every stage. No black boxes, no disappearing acts.",
  },
  {
    icon: Bot,
    title: "Real AI value",
    text: "AI only where it creates measurable value for your business — never as a gimmick.",
  },
];

export default function About() {
  usePageMeta(
    "About — AI Product Manager & Website Developer",
    "Saurav Singh is an AI Product Manager and AI website developer helping businesses plan, design and build websites and AI products that generate real business results.",
  );

  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="About"
        title="The person behind the products"
        description="AI Product Manager, website developer and digital product builder — one accountable partner for taking your business from idea to launched product."
      />

      {/* Profile */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-5">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                I build websites and AI products the way they should be built — with strategy,
                structure and business outcomes in mind.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="leading-relaxed text-muted-foreground">
                I'm {siteConfig.name}, an AI Product Manager and website developer based in India,
                working with businesses worldwide. My work sits at the intersection of three
                things: understanding what a business actually needs, planning it like a real
                product, and building it with modern technology.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-muted-foreground">
                That means your website or AI product doesn't just look good — it's designed
                around your customers, structured around your business goals, and built to
                generate leads, bookings or sales. From a local business that needs to be found
                on mobile, to a startup that needs an AI product planned and built from scratch.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="leading-relaxed text-muted-foreground">
                I take end-to-end ownership: product thinking, requirements, design, development,
                launch and support. One person, accountable for the whole result.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Work With Me
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 size-4" />
                    Say Hello
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Profile card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl bg-night p-8 text-night-foreground">
              <div aria-hidden className="bg-grid-night absolute inset-0 opacity-50" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-display flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.42_0.12_268)] text-2xl font-bold text-primary-foreground shadow-lg">
                    SS
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold tracking-tight">
                      {siteConfig.name}
                    </p>
                    <p className="text-sm text-night-muted">{siteConfig.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-sm text-night-muted">
                  <p className="flex items-start gap-2.5">
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                    AI Product Management — PRDs, requirements, MVP planning
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                    AI Website Development — chatbots, intelligent features
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
                    Business websites, landing pages, redesigns & automation
                  </p>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-night-muted">Focus</p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug">
                    Helping businesses use AI and web technology to win customers and grow.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-border/60 bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
          <SectionHeading
            eyebrow="My Approach"
            title="How I think about your project"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <a.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Working Together"
            title="What you can rely on"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
