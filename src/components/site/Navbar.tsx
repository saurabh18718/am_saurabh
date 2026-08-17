import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig, waLink } from "@/config/site";
import { useAuth } from "@/hooks/use-auth";
import { ArrowUpRight, LayoutDashboard, Mail, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  ].join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      {/* Slim contact bar */}
      <div className="hidden border-b border-border/50 md:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-1.5 text-xs text-muted-foreground sm:px-6">
          <p className="font-medium">{siteConfig.locationShort}</p>
          <div className="flex items-center gap-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <MessageCircle className="size-3.5" />
              {siteConfig.whatsapp.display}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="size-3.5" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Saurav Singh — home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === "/"} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated && (
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link to="/dashboard">
                <LayoutDashboard className="mr-1.5 size-4" />
                Client Hub
              </Link>
            </Button>
          )}
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">
              Start Your Project
              <ArrowUpRight className="ml-1.5 size-4" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription>Menu</SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {siteConfig.nav.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                {isAuthenticated && (
                  <Button asChild variant="outline" size="lg" onClick={() => setOpen(false)}>
                    <Link to="/dashboard">
                      <LayoutDashboard className="mr-2 size-4" />
                      Client Hub
                    </Link>
                  </Button>
                )}
                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                  <Button asChild size="lg" onClick={() => setOpen(false)}>
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" onClick={() => setOpen(false)}>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 size-4" />
                      WhatsApp Me
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
