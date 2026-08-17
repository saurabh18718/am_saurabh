import { ContactForm } from "@/components/site/ContactForm";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig, waLink } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useSearchParams } from "react-router";

const infoCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [siteConfig.whatsapp.display, "Fastest response — usually within hours"],
    href: waLink(),
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [siteConfig.email, "For detailed briefs and attachments"],
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [siteConfig.location, "Remote projects worldwide"],
    href: undefined,
    external: false,
  },
  {
    icon: Clock,
    title: "Response Time",
    lines: ["Within 24 hours", "Usually much faster"],
    href: undefined,
    external: false,
  },
];

export default function Contact() {
  usePageMeta(
    "Contact — Start Your Project",
    "Tell me about your project — business websites, AI websites, chatbots, landing pages, AI product management or automation. Free consultation and a fixed quote.",
  );

  const [searchParams] = useSearchParams();
  const projectType = searchParams.get("projectType") ?? undefined;

  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Contact"
        title="Let's build something that grows your business"
        description="Tell me what you need — a website, an AI product, a chatbot or automation. I'll reply with clear next steps and a fixed quote."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          {/* Info column */}
          <div className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoCards.map((card, i) => {
                const Inner = (
                  <div
                    className={`flex h-full flex-col gap-2 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md ${
                      card.href ? "cursor-pointer" : ""
                    }`}
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <card.icon className="size-5" />
                    </span>
                    <p className="font-display text-sm font-semibold tracking-tight">{card.title}</p>
                    <div className="flex flex-col gap-0.5">
                      {card.lines.map((l) => (
                        <p key={l} className="text-sm text-muted-foreground">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                );
                return (
                  <Reveal key={card.title} delay={i * 0.05} className="h-full">
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.external ? "_blank" : undefined}
                        rel={card.external ? "noopener noreferrer" : undefined}
                        className="block h-full"
                      >
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-night p-6 text-night-foreground">
                <p className="text-sm leading-relaxed text-night-muted">
                  Prefer to skip forms?{" "}
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-night-foreground underline underline-offset-2"
                  >
                    Message me on WhatsApp
                  </a>{" "}
                  with one line about your project and I'll take it from there.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Send className="size-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold tracking-tight">
                    Start your project
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Free consultation · Fixed quote · No obligation
                  </p>
                </div>
              </div>
              <ContactForm defaultProjectType={projectType} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
