import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { siteConfig, waLink } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export default function FaqPage() {
  usePageMeta(
    "FAQ — Websites, AI Products & Pricing",
    "Answers to common questions about website costs, timelines, AI features, SEO, payments, support and working together.",
  );

  return (
    <>
      <PageHeader
        crumb="FAQ"
        eyebrow="FAQ"
        title="Answers before you even ask"
        description="The questions clients ask most before starting a project — costs, timelines, AI, SEO and how we'll work together."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {siteConfig.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/[0.03] px-6 py-10 text-center">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Still have a question?
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Ask me directly — I usually reply within a few hours during the working day.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Ask on the Contact Page
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 size-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
