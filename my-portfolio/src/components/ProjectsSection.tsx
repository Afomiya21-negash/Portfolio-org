import { ExternalLink, Github, Users } from "lucide-react";
import { developmentProjects } from "@/data/dev-projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent">Beyond design</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Development projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Software work from university, internships, and collaborations — kept here as
            supporting context, not the main story.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {developmentProjects.map((project) => (
            <article
              key={project.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <img
                src={project.image}
                alt=""
                className="h-24 w-24 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  {project.isCollab ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                      <Users size={10} aria-hidden="true" />
                      Collaboration
                    </span>
                  ) : null}
                  {project.isInProgress ? (
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                      In progress
                    </span>
                  ) : null}
                </div>
                <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="text-[11px] text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground"
                    >
                      <Github size={13} aria-hidden="true" />
                      Code
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground"
                    >
                      <ExternalLink size={13} aria-hidden="true" />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
