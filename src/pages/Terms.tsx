import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const sections = [
  {
    title: "1. Agreement to Terms",
    body: `By using this website and engaging ${siteConfig.name} ("I", "me", "my") for services, you agree to these terms and conditions. If you do not agree, please do not use this website or submit inquiries.`,
  },
  {
    title: "2. Services",
    body: "I provide website development, AI product management, AI chatbot integration, landing page development, website redesign, business automation, MVP development and related digital services. Specific deliverables, timelines and prices are agreed in writing on a per-project basis before work begins.",
  },
  {
    title: "3. Quotes & Pricing",
    body: "Prices shown on this website are starting prices and are indicative only. Final pricing depends on the scope, complexity and requirements of your specific project, and is confirmed in a written proposal before any commitment. All prices are in Indian Rupees (INR) unless otherwise stated.",
  },
  {
    title: "4. Payment Terms",
    body: "Projects begin after an agreed advance payment (typically 50% of the quoted amount). The remaining balance is due on completion, as specified in the project proposal. Payment details are confirmed in writing before work starts.",
  },
  {
    title: "5. Project Timelines",
    body: "Estimated timelines are provided in good faith and may be affected by content delivery, feedback delays, third-party dependencies and scope changes. Reasonable revision cycles are included as agreed per project.",
  },
  {
    title: "6. Client Responsibilities",
    body: "You agree to provide accurate information, content and feedback in a timely manner, and to supply any access, assets or approvals needed to complete the project. Delays in providing these may extend the project timeline.",
  },
  {
    title: "7. Intellectual Property",
    body: "Upon full payment, you receive the rights to the final deliverables created for your project, as agreed in the project proposal. I retain the right to showcase completed work in my portfolio unless a confidentiality agreement states otherwise.",
  },
  {
    title: "8. Confidentiality",
    body: "Project discussions and materials shared during an engagement are treated as confidential and are not disclosed to third parties, except as needed to deliver the services (e.g., hosting, email or analytics providers).",
  },
  {
    title: "9. Limitation of Liability",
    body: "Services are provided on a best-efforts basis to professional standards. To the maximum extent permitted by law, liability is limited to the amount paid for the specific project. I am not liable for indirect or consequential losses, including lost profits or business interruption.",
  },
  {
    title: "10. Third-Party Services",
    body: "Projects may rely on third-party platforms (hosting, domains, payment gateways, AI providers, messaging apps). Their terms and availability are outside my control, and their applicable terms apply to your use of them.",
  },
  {
    title: "11. Termination",
    body: "Either party may terminate a project agreement with written notice. Work completed up to the termination date is payable, and any advance is refundable only where work has not commenced.",
  },
  {
    title: "12. Governing Law",
    body: "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in India.",
  },
  {
    title: "13. Contact",
    body: `For questions about these terms, email ${siteConfig.email} or message ${siteConfig.whatsapp.display} on WhatsApp.`,
  },
];

export default function Terms() {
  usePageMeta("Terms & Conditions");

  return (
    <>
      <PageHeader
        crumb="Terms & Conditions"
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that apply when you use this website and engage my services."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
          <Reveal>
            <p className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Effective date:</span>{" "}
              {new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </Reveal>
          <div className="flex flex-col gap-6">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.04}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="font-display text-lg font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
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
