import { ExternalLink } from "lucide-react";
import { designExplorations } from "@/data/dev-projects";

export const ExplorationsSection = () => {
  return (
    <section id="explorations" className="py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm uppercase tracking-[0.18em] text-accent">Explorations</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground">
          At home or learning designs
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {designExplorations.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-border bg-card">
              <img src={project.image} alt={`${project.title} preview`} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-medium text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                {project.figma ? (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                  >
                    Open Figma design
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
