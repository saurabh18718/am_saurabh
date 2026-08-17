import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useQuery } from "convex/react";
import {
  ArrowRight,
  Bot,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Inbox,
  LogOut,
  MessageCircle,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { waLink } from "@/config/site";

const journey = [
  { icon: Search, label: "Discovery call", done: true },
  { icon: FileText, label: "Scope & proposal", done: true },
  { icon: Briefcase, label: "Build in progress", done: false },
  { icon: Rocket, label: "Launch & support", done: false },
];

const statusStyles: Record<string, string> = {
  new: "bg-blue-500/10 text-blue-600",
  contacted: "bg-amber-500/10 text-amber-600",
  closed: "bg-emerald-500/10 text-emerald-600",
};

export default function Dashboard() {
  usePageMeta("Client Hub");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const inquiries = useQuery(api.inquiries.getMyInquiries);
  const inquiryList = inquiries ?? [];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-10 text-foreground sm:px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Client Hub</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              Welcome{user?.name ? `, ${user.name}` : " back"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="gap-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="gap-2"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Start a project */}
            <Card className="border-border/70 shadow-none">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </div>
                <CardTitle>Start a new project</CardTitle>
                <CardDescription>
                  Ready to build? Tell me about your website or AI product and get a fixed quote.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="gap-2">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/services">Browse services</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project journey */}
            <Card className="border-border/70 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="size-5 text-primary" />
                  Your project journey
                </CardTitle>
                <CardDescription>
                  Where a typical project stands after you reach out.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="flex flex-col gap-4">
                  {journey.map((step, i) => (
                    <li key={step.label} className="flex items-center gap-3">
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border ${
                          step.done
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-border bg-background text-muted-foreground/60"
                        }`}
                      >
                        {step.done ? (
                          <CheckCircle2 className="size-4" />
                        ) : (
                          <step.icon className="size-4" />
                        )}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          step.done ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                      {i < journey.length - 1 && (
                        <span className="ml-1 h-px flex-1 bg-border" aria-hidden />
                      )}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* AI tip */}
            <div className="flex items-start gap-3 rounded-2xl bg-night p-5 text-night-foreground">
              <Bot className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p className="text-sm leading-relaxed text-night-muted">
                Thinking about AI for your business? A chatbot, an AI website or an automation
                workflow could save hours every week.{" "}
                <Link to="/ai-product-management" className="font-semibold text-night-foreground underline underline-offset-2">
                  Explore AI Product Management
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right column — inquiries */}
          <Card className="border-border/70 shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Inbox className="size-5 text-primary" />
                Your inquiries
              </CardTitle>
              <CardDescription>
                Project inquiries you've submitted while signed in.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {inquiries === undefined ? (
                <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted-foreground">
                  <Clock className="size-4 animate-pulse" />
                  Loading…
                </div>
              ) : inquiryList.length === 0 ? (
                <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-10 text-center">
                  <Inbox className="size-8 text-muted-foreground/50" />
                  <p className="max-w-xs text-sm text-muted-foreground">
                    No inquiries yet. When you submit the contact form while signed in, your
                    projects appear here with their status.
                  </p>
                  <Button asChild size="sm">
                    <Link to="/contact">Submit your first inquiry</Link>
                  </Button>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {inquiryList.map((inquiry) => (
                    <li
                      key={inquiry._id}
                      className="rounded-xl border border-border bg-background p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">{inquiry.projectType}</p>
                          <Badge
                            className={`rounded-full capitalize ${
                              statusStyles[inquiry.status ?? "new"] ?? statusStyles.new
                            }`}
                          >
                            {inquiry.status ?? "new"}
                          </Badge>
                        </div>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {formatDate(inquiry._creationTime)}
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {inquiry.description}
                      </p>
                      {(inquiry.budget || inquiry.preferredContact) && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          {inquiry.budget && (
                            <span className="mr-3">
                              Budget: <span className="font-medium">{inquiry.budget}</span>
                            </span>
                          )}
                          {inquiry.preferredContact && (
                            <span>
                              Contact:{" "}
                              <span className="font-medium">{inquiry.preferredContact}</span>
                            </span>
                          )}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
