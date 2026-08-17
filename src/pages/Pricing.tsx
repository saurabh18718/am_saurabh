import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
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
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { waLink } from "@/config/site";

export default function Pricing() {
  usePageMeta(
    "Pricing — Starter, Business Pro & AI Premium",
    "Transparent starting prices for websites and AI products: Starter ₹25,000, Business Pro ₹50,000, AI Premium ₹1,00,000. Fixed quotes after a free consultation.",
  );

  return (
    <>
      <PageHeader
        crumb="Pricing"
        eyebrow="Pricing"
        title="Simple, transparent packages"
        description="Clear starting prices with no hidden fees. You get a fixed quote after we discuss your exact requirements."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6">
          {/* Plans */}
          <div className="grid gap-6 lg:grid-cols-3">
            {siteConfig.pricing.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.08} className="h-full">
                <Card
                  className={`relative flex h-full flex-col shadow-none ${
                    plan.highlighted
                      ? "border-primary/40 shadow-xl shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  {plan.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Sparkles className="mr-1 size-3" />
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="font-display text-xl tracking-tight">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-semibold tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">{plan.priceSuffix}</span>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-6">
                    <ul className="flex flex-col gap-2.5">
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
                      size="lg"
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

          {/* Enterprise */}
          <Reveal>
            <div className="flex flex-col gap-6 rounded-2xl bg-night p-8 text-night-foreground sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {siteConfig.customEnterprise.name}
                </h2>
                <p className="text-sm leading-relaxed text-night-muted">
                  {siteConfig.customEnterprise.description}
                </p>
                <ul className="grid gap-2 pt-1 sm:grid-cols-2">
                  {siteConfig.customEnterprise.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-night-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary-foreground/70" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                <span className="font-display text-2xl font-semibold">
                  {siteConfig.customEnterprise.price}
                </span>
                <Button asChild size="lg" className="bg-white/10 text-night-foreground hover:bg-white/15">
                  <Link to="/contact">
                    {siteConfig.customEnterprise.cta}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <p className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-center text-sm text-muted-foreground">
            {siteConfig.pricingNote}
          </p>

          {/* Pricing FAQ */}
          <div className="mx-auto w-full max-w-3xl pt-6">
            <SectionHeading
              eyebrow="Pricing FAQ"
              title="Questions about pricing"
            />
            <Accordion type="single" collapsible className="mt-10 w-full">
              {siteConfig.faqs
                .filter((f) =>
                  f.q.toLowerCase().includes("cost") ||
                  f.q.toLowerCase().includes("payment") ||
                  f.q.toLowerCase().includes("revision") ||
                  f.q.toLowerCase().includes("long"),
                )
                .map((faq, i) => (
                  <AccordionItem key={faq.q} value={`pf-${i}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Not sure which package fits? Send your requirements and I'll recommend one.
              </p>
              <Button asChild variant="outline">
                <a href={waLink("Hello Saurav, I'd like help choosing the right package for my project.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 size-4" />
                  Ask on WhatsApp
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
