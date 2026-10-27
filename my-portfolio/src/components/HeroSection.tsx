import { ArrowRight } from "lucide-react";
import { SectionLink } from "./SectionLink";

const facts = [
  { value: "UI/UX", label: "Design focus" },
  { value: "CS", label: "Graduate, St. Mary's" },
  { value: "3", label: "Featured civic products" },
  { value: "ET", label: "Based in Addis Ababa" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-8">
            <p className="animate-fade-in inline-flex items-center gap-2 text-sm font-medium text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              UI/UX Designer · Aspiring Product Designer
            </p>

            <h1 className="animate-slide-up max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[5.5rem]">
              Designing thoughtful{" "}
              <span className="text-accent">digital experiences.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I'm Afomiya Mesfin. I enjoy designing intuitive, meaningful digital products that
              combine creative thinking with a Computer Science background. I believe interfaces
              should feel natural to use and solve real problems.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <SectionLink
                hash="work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore My Work
                <ArrowRight size={16} aria-hidden="true" />
              </SectionLink>
              <SectionLink
                hash="contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Get in Touch
              </SectionLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-card p-6">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-serif text-4xl text-foreground">{fact.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{fact.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 lg:hidden">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-card p-5">
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-serif text-3xl text-foreground">{fact.value}</dd>
                <p className="mt-1 text-xs text-muted-foreground">{fact.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
