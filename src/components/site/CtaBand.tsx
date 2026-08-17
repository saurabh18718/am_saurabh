import { Button } from "@/components/ui/button";
import { siteConfig, waLink } from "@/config/site";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

interface CtaBandProps {
  title?: string;
  description?: string;
}

export function CtaBand({
  title = "Have a project in mind?",
  description = "Tell me what you're building — websites, AI products, chatbots or automation. I'll reply with a clear plan and a fixed quote.",
}: CtaBandProps) {
  return (
    <section className="bg-night text-night-foreground">
      <div className="relative overflow-hidden">
        <div aria-hidden className="bg-grid-night absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.64_0.14_264/0.35),transparent)] blur-2xl"
        />
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-24">
          <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-night-muted sm:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">
                Start Your Project
                <ArrowUpRight className="ml-1.5 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/5 text-base text-night-foreground hover:bg-white/10 hover:text-night-foreground"
            >
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 size-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-xs text-night-muted">
            Or email me directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-night-foreground underline-offset-2 hover:underline">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
