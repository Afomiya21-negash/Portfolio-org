export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent">About</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
              Creative thinking, with a technical spine.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I enjoy turning ideas into thoughtful digital experiences. With a background in
              Computer Science and a growing practice in UI/UX design, I bring together
              creative thinking, structured problem-solving, and an understanding of how
              digital products work. I’m interested in interfaces that look beautiful, feel
              natural to use, and help people complete real tasks.
            </p>
            <p>
              I am a <span className="text-foreground">Computer Science graduate</span> from
              St. Mary’s University, with a strong curiosity for how technology shapes the way
              people interact with the world. My path through software development — frontend
              and backend — taught me to care about solutions that are not only functional,
              but meaningful.
            </p>
            <p>
              Throughout my academic career I have worked on desktop applications and
              full-stack web products, including an internship at Efuye Gela. I still write
              code when it helps me think, but the work I want to be known for is design:
              Figma, design systems, and the craft of making a product easier to live with.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Education</p>
            <h3 className="mt-4 font-serif text-2xl text-foreground">B.Sc. Computer Science</h3>
            <p className="mt-2 text-sm text-muted-foreground">St. Mary’s University</p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Experience</p>
            <h3 className="mt-4 font-serif text-2xl text-foreground">Internship</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Efuye Gela — full-stack chat product (Buna Te’tu)
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Based in</p>
            <h3 className="mt-4 font-serif text-2xl text-foreground">Addis Ababa</h3>
            <p className="mt-2 text-sm text-muted-foreground">Ethiopia</p>
          </article>
        </div>
      </div>
    </section>
  );
};
