import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowLeft, Compass, Home } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function NotFound() {
  usePageMeta("Page Not Found");
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-grid px-4 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,oklch(0.5_0.155_264/0.12),transparent_70%)]"
      />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <span className="font-display bg-gradient-to-r from-primary to-[oklch(0.55_0.14_275)] bg-clip-text text-7xl font-bold text-transparent sm:text-8xl">
          404
        </span>
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          This page is still in development
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          The page you're looking for doesn't exist or has moved. Let's get you back to
          something useful.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/services">
              <Compass className="mr-2 size-4" />
              Explore Services
            </Link>
          </Button>
          <Button size="lg" variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 size-4" />
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
}
