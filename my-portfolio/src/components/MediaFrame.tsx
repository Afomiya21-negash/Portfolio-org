import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  kind?: "phone" | "web";
  caption?: string;
  className?: string;
};

export const MediaFrame = ({ src, alt, kind = "phone", caption, className }: MediaFrameProps) => {
  if (kind === "web") {
    return (
      <figure className={cn("group", className)}>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex items-center gap-1.5 border-b border-border bg-secondary/70 px-4 py-2.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </div>
          <img src={src} alt={alt} className="h-auto w-full" loading="lazy" />
        </div>
        {caption ? (
          <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={cn("group", className)}>
      <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-zinc-950 p-1.5 shadow-card">
        <div className="overflow-hidden rounded-[1.35rem] bg-white">
          <img src={src} alt={alt} className="h-auto w-full" loading="lazy" />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
};
