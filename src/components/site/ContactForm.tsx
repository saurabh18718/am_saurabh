import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { siteConfig, waLink } from "@/config/site";
import { useAuth } from "@/hooks/use-auth";
import { useAction, useMutation } from "convex/react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  preferredContact: string;
  description: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  projectType: "",
  budget: "",
  preferredContact: "WhatsApp",
  description: "",
};

/** Fully working project-inquiry form — submissions are saved to Convex and
 *  (if RESEND_API_KEY is configured) emailed to the site owner. */
export function ContactForm({ defaultProjectType }: { defaultProjectType?: string }) {
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    projectType: defaultProjectType ?? "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const submitInquiry = useMutation(api.inquiries.submitInquiry);
  const sendEmail = useAction(api.inquiryEmail.sendInquiryEmail);
  const { user, isAuthenticated } = useAuth();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.description.trim()) {
      toast.error("Please fill in your name, email and project description.");
      return;
    }
    if (!form.projectType) {
      toast.error("Please select the type of project you need.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        businessName: form.businessName || undefined,
        projectType: form.projectType,
        budget: form.budget || undefined,
        description: form.description,
        preferredContact: form.preferredContact || undefined,
        userId: isAuthenticated ? user?._id : undefined,
      });
      setSubmittedId(result.id);

      // Fire-and-forget owner notification — gracefully no-ops without a key.
      void sendEmail({
        inquiryId: result.id,
        ownerEmail: siteConfig.email,
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        businessName: form.businessName || undefined,
        projectType: form.projectType,
        budget: form.budget || undefined,
        preferredContact: form.preferredContact || undefined,
        description: form.description,
      }).catch(() => undefined);

      toast.success("Inquiry received — I'll get back to you within 24 hours.");
    } catch (error) {
      console.error("Inquiry submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedId) {
    const waMessage = `Hello Saurav, I just submitted an inquiry for a "${form.projectType}" project (from ${form.name}). Looking forward to your reply.`;
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-primary/20 bg-primary/[0.04] px-6 py-14 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            Your inquiry was received
          </h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
            Thanks, {form.name.split(" ")[0]}. I'll review your project brief and reply
            within 24 hours. Need a faster response? Message me directly on WhatsApp.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-4" />
              Continue on WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => setSubmittedId(null)}>
            Submit another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-name">
            Your Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="cf-name"
            name="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-phone">Phone / WhatsApp</Label>
          <Input
            id="cf-phone"
            name="phone"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 98765 43210"
            autoComplete="tel"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-business">Business / Company Name</Label>
          <Input
            id="cf-business"
            name="businessName"
            value={form.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            placeholder="Acme Pvt. Ltd."
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-type">
            Project Type <span className="text-destructive">*</span>
          </Label>
          <Select value={form.projectType} onValueChange={(v) => set("projectType", v)}>
            <SelectTrigger id="cf-type">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              {siteConfig.projectTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-budget">Budget Range</Label>
          <Select value={form.budget} onValueChange={(v) => set("budget", v)}>
            <SelectTrigger id="cf-budget">
              <SelectValue placeholder="Select a budget range" />
            </SelectTrigger>
            <SelectContent>
              {siteConfig.budgets.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Preferred Contact Method</Label>
        <RadioGroup
          value={form.preferredContact}
          onValueChange={(v) => set("preferredContact", v)}
          className="flex flex-wrap gap-2"
        >
          {siteConfig.preferredContactMethods.map((m) => (
            <Label
              key={m}
              htmlFor={`pc-${m}`}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
            >
              <RadioGroupItem value={m} id={`pc-${m}`} />
              {m}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cf-desc">
          Project Description <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="cf-desc"
          name="description"
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="Tell me about your business, what you want to build, and what success looks like…"
          rows={6}
          required
        />
        <p className="text-xs text-muted-foreground">
          The more detail you share, the more accurate your quote will be.
        </p>
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Send Project Inquiry
          </>
        )}
      </Button>
    </form>
  );
}
