import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const sections = [
  {
    title: "1. Information I Collect",
    body: "When you submit the contact form, I collect the details you provide: your name, email address, phone number, business name, project type, budget range and the project description you share. If you create an account on this website, I store your account details and the project inquiries you submit while signed in.",
  },
  {
    title: "2. How I Use Your Information",
    body: "I use the information you provide to respond to your inquiry, prepare quotes, communicate about your project, and deliver services you request. If you opt into email notifications, I may send you updates related to your project. I do not sell or rent your personal information to anyone.",
  },
  {
    title: "3. Data Storage & Security",
    body: "Inquiries are stored securely in a database managed by Convex (convex.dev). Reasonable technical and organizational measures are used to protect your data. No data is shared with third parties except the service providers required to operate this website and deliver the services you request (for example, email delivery and database hosting).",
  },
  {
    title: "4. Cookies & Analytics",
    body: "This website does not use advertising cookies. Basic analytics may be used to understand how visitors use the site so I can improve it. You can disable cookies or analytics in your browser settings.",
  },
  {
    title: "5. Third-Party Links",
    body: "This website may link to third-party services such as WhatsApp, email clients and social media platforms. Those services have their own privacy policies, which I encourage you to review.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information I hold about you at any time. To make a request, contact me using the details below. I will respond within a reasonable timeframe.",
  },
  {
    title: "7. Changes to This Policy",
    body: "I may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.",
  },
  {
    title: "8. Contact",
    body: `For any privacy questions or requests, email ${siteConfig.email} or message me on WhatsApp at ${siteConfig.whatsapp.display}.`,
  },
];

export default function Privacy() {
  usePageMeta("Privacy Policy");

  return (
    <>
      <PageHeader
        crumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description="How this website collects, uses and protects your information."
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
