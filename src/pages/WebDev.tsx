import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Gauge,
  Globe,
  LayoutTemplate,
  MonitorSmartphone,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";

const buildTypes = [
  {
    icon: Globe,
    title: "Business Websites",
    text: "Professional, multi-page websites for businesses, startups, professionals and local businesses — built to build trust and win customers.",
    type: "Business Website",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Websites",
    text: "Websites with intelligent features: AI chatbots, smart lead capture, recommendations and AI-assisted experiences.",
    type: "AI Website",
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    text: "Chatbots trained on your business that answer questions, qualify leads and hand off hot prospects — 24/7.",
    type: "AI Chatbot",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    text: "Single, high-converting pages for product launches, campaigns and services — built around one clear goal.",
    type: "Landing Page",
  },
  {
    icon: Wrench,
    title: "Website Redesigns",
    text: "Outdated or underperforming websites modernized into fast, premium, mobile-first experiences.",
    type: "Website Redesign",
  },
  {
    icon: Rocket,
    title: "MVPs & Web Apps",
    text: "Functional minimum viable products — the fastest way to get a real product in front of real users.",
    type: "MVP Development",
  },
];

const included = [
  {
    icon: Smartphone,
    title: "Mobile-First Responsive",
    text: "Built for phones first, then tablets and desktops. Tested on all three before launch.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    text: "Clean semantic markup, proper headings, meta titles and descriptions, fast load times.",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    text: "Optimized images, minimal bloat and modern tooling — a site that loads fast and keeps visitors.",
  },
  {
    icon: Bot,
    title: "WhatsApp & Forms",
    text: "Contact forms, WhatsApp chat buttons and lead capture wired in — so visitors can actually reach you.",
  },
  {
    icon: Globe,
    title: "Analytics & Tracking",
    text: "Traffic and conversion tracking set up (Business Pro and above) so you know what's working.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern, Premium UI/UX",
    text: "A cohesive design system, clear hierarchy and conversion-focused layouts — not a stock template.",
  },
];

export default function WebDev() {
  usePageMeta(
    "Website Development — Business, AI & Landing Pages",
    "Website development services: business websites, AI-powered websites, landing pages, redesigns and MVPs — fast, mobile-first, SEO-ready and built to convert.",
  );

  return (
    <>
      <PageHeader
        crumb="Website Development"
        eyebrow="Website Development"
        title="Websites built to look premium and win customers"
        description="Fast, mobile-first, SEO-ready websites with real functionality — contact forms, WhatsApp, AI features and analytics. Designed around your business, not a template."
      >
        <Button asChild size="lg">
          <Link to="/contact?projectType=Business%20Website">
            Get My Website Built
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </PageHeader>

      {/* Build types */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="What I Build"
            title="Six ways to put your business online"
            description="Choose one service or combine them — every build starts with a discovery call to scope the right approach."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildTypes.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  <div className="mt-auto pt-3">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-1 px-0 text-primary hover:bg-transparent hover:text-primary"
                    >
                      <Link to={`/contact?projectType=${encodeURIComponent(b.type)}`}>
                        Discuss {b.title}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-border/60 bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Every Build Includes"
            title="The baseline of professional quality"
            description="No matter the package, every website I deliver meets these standards."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((inc, i) => (
              <Reveal key={inc.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <inc.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">{inc.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{inc.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process + CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="From Brief to Live"
              title="Your website in six clear stages"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Discovery → Strategy → Design → Development → Testing → Launch. Each stage has clear
              deliverables and a checkpoint with you. Most business websites take 2–4 weeks;
              landing pages 1–2 weeks.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/process">See the full process</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
          <Reveal>
            <div className="rounded-2xl bg-night p-8 text-night-foreground">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                The difference between a website and a website that sells
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-night-muted">
                {[
                  "A clear message about who you help and why they should choose you.",
                  "A conversion path — every visitor knows exactly what to do next.",
                  "Trust signals: social proof, testimonials, credentials, clear contact.",
                  "Mobile experience that doesn't frustrate 70% of your visitors.",
                  "Real functionality: forms, WhatsApp, bookings, payments where needed.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-foreground/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready for a website that works as hard as you do?" />
    </>
  );
}
