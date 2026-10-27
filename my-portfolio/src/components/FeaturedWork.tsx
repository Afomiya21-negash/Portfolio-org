import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { designProjects } from "@/data/design-work";
import { MediaFrame } from "./MediaFrame";

export const FeaturedWork = () => {
  const superApp = designProjects[0];
  const bookIt = designProjects[1];
  const traffic = designProjects[2];

  if (!superApp || !bookIt || !traffic) {
    return null;
  }

  return (
    <section id="work" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-accent">Selected work</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            Designing digital experiences for the city.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Three civic products — a citizen super app, an appointment portal, and an officer
            tool — designed so public services feel clearer to use.
          </p>
        </div>

        <article className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — Mobile</p>
            <h3 className="mt-3 font-serif text-4xl text-foreground">{superApp.title}</h3>
            <p className="mt-2 text-sm text-accent">{superApp.category}</p>
            <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
              {superApp.shortDescription}
            </p>
            <Link
              to={`/work/${superApp.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              View case study
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <Link to={`/work/${superApp.slug}`} className="group block" aria-label="Open Shaggar Super App case study">
            <div className="relative rounded-[2rem] bg-secondary px-6 py-10 sm:px-10">
              <div className="flex justify-center gap-4 sm:gap-6">
                {superApp.preview.map((src, index) => (
                  <div
                    key={src}
                    className={`w-[31%] max-w-[180px] transition-transform duration-500 ${
                      index === 1 ? "-translate-y-3 group-hover:-translate-y-5" : "translate-y-4 group-hover:translate-y-2"
                    }`}
                  >
                    <MediaFrame src={src} alt="" kind="phone" />
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </article>

        <article className="mt-24">
          <Link to={`/work/${bookIt.slug}`} className="group block" aria-label="Open BookIt case study">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-soft transition-shadow duration-300 group-hover:shadow-card sm:p-5">
              <MediaFrame src={bookIt.cover} alt={bookIt.coverAlt} kind="web" />
            </div>
          </Link>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Web</p>
              <h3 className="mt-2 font-serif text-4xl text-foreground">{bookIt.title}</h3>
              <p className="mt-2 text-sm text-accent">{bookIt.category}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{bookIt.shortDescription}</p>
            </div>
            <Link
              to={`/work/${bookIt.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              View case study
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="mt-24 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Link to={`/work/${traffic.slug}`} className="group order-2 lg:order-1" aria-label="Open Shaggar Traffic case study">
            <div className="grid grid-cols-3 gap-3 rounded-[2rem] bg-[#1f3d32] p-6 sm:p-8">
              {traffic.preview.map((src) => (
                <MediaFrame key={src} src={src} alt="" kind="phone" />
              ))}
            </div>
          </Link>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Mobile</p>
            <h3 className="mt-3 font-serif text-4xl text-foreground">{traffic.title}</h3>
            <p className="mt-2 text-sm text-accent">{traffic.category}</p>
            <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
              {traffic.shortDescription}
            </p>
            <Link
              to={`/work/${traffic.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              View case study
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};
