import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { MediaFrame } from "../components/MediaFrame";
import { Navbar } from "../components/Navbar";
import { getDesignProject, designProjects } from "@/data/design-work";

export const CaseStudy = () => {
  const { slug } = useParams();
  const project = slug ? getDesignProject(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const others = designProjects.filter((item) => item.slug !== project.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main" className="pt-24">
        <article>
          <header className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-8">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All work
            </Link>
            <p className="mt-10 text-sm text-accent">{project.category}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl tracking-tight text-foreground sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </header>

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div
              className={`overflow-hidden rounded-[2rem] p-6 sm:p-10 ${
                project.slug === "bookit" ? "bg-secondary" : project.slug === "shaggar-traffic" ? "bg-[#1f3d32]" : "bg-secondary"
              }`}
            >
              {project.slug === "bookit" ? (
                <MediaFrame src={project.cover} alt={project.coverAlt} kind="web" />
              ) : (
                <div className="flex justify-center gap-2 sm:gap-4">
                  {project.preview.map((src) => (
                    <div key={src} className="w-[28%] max-w-[160px]">
                      <MediaFrame src={src} alt="" kind="phone" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-10">
              <section>
                <h2 className="text-xs uppercase tracking-[0.18em] text-accent">Overview</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.overview}</p>
              </section>
              <section>
                <h2 className="text-xs uppercase tracking-[0.18em] text-accent">The problem</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.problem}</p>
              </section>
              <section>
                <h2 className="text-xs uppercase tracking-[0.18em] text-accent">Role & scope</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.role}</p>
              </section>
            </div>
            <section>
              <h2 className="text-xs uppercase tracking-[0.18em] text-accent">Design goals</h2>
              <ol className="mt-4 space-y-4">
                {project.goals.map((goal, index) => (
                  <li key={goal} className="flex gap-4 border-t border-border pt-4">
                    <span className="font-serif text-xl text-accent">0{index + 1}</span>
                    <p className="text-foreground">{goal}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-3xl text-foreground">How the interface is organized</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{project.approach}</p>
          </section>

          <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-3xl text-foreground">Final interface</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Screens from the working design. Captions describe what is visible, not unverified outcomes.
            </p>
            <div className="mt-10 columns-1 gap-8 sm:columns-2">
              {project.gallery.map((item) => (
                <div key={item.src} className="mb-8 break-inside-avoid">
                  <MediaFrame src={item.src} alt={item.alt} kind={item.kind} caption={item.caption} />
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-3xl text-foreground">Key design decisions</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {project.decisions.map((decision) => (
                <article key={decision.title} className="rounded-3xl border border-border bg-card p-7">
                  <h3 className="text-lg font-medium text-foreground">{decision.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{decision.body}</p>
                </article>
              ))}
            </div>
          </section>

          <nav className="mx-auto mt-12 max-w-6xl border-t border-border px-5 py-16 sm:px-8" aria-label="More work">
            <p className="text-sm text-muted-foreground">More selected work</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to={`/work/${item.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-6"
                >
                  <span>
                    <span className="block font-serif text-2xl text-foreground">{item.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{item.category}</span>
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground" size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
