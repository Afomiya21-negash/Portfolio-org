import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SectionLink } from "./SectionLink";
import { cn } from "@/lib/utils";

const links = [
  { hash: "work", label: "Work" },
  { hash: "about", label: "About" },
  { hash: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-20" aria-label="Primary">
        <Link to="/" className="font-serif text-2xl tracking-tight text-foreground">
          afomiya<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <SectionLink
              key={link.hash}
              hash={link.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </SectionLink>
          ))}
        </div>

        <SectionLink
          hash="contact"
          className="hidden items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Let’s talk
          <ArrowUpRight size={14} aria-hidden="true" />
        </SectionLink>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="border-t border-border bg-background px-5 py-4 md:hidden"
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <SectionLink
              key={link.hash}
              hash={link.hash}
              onNavigate={() => setIsOpen(false)}
              className="rounded-xl px-3 py-3 text-base text-foreground hover:bg-secondary"
            >
              {link.label}
            </SectionLink>
          ))}
        </div>
      </div>
    </header>
  );
};
