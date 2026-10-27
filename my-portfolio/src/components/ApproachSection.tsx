const pillars = [
  {
    title: "Clarity first",
    body: "I start with what someone needs to do, then shape the interface so that task is obvious. Labels, hierarchy, and empty states matter as much as the happy path.",
  },
  {
    title: "Make complexity feel local",
    body: "Civic products carry many services and statuses. I look for hubs, steps, and groupings that keep a large system from feeling like a long menu.",
  },
  {
    title: "Design with how it gets built",
    body: "A Computer Science background helps me respect constraints — forms, states, authentication, and the path from a Figma frame to a working screen.",
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent">Design approach</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
              I design for the moment someone finds what they need.
            </h2>
          </div>
          <p className="self-end text-muted-foreground leading-relaxed">
            I like problems where information is dense and the stakes are everyday: paying a
            charge, booking a visit, checking an application. The work is to make that feel
            calm, structured, and a little more human.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="bg-card p-8">
              <p className="font-serif text-3xl text-accent/70">0{index + 1}</p>
              <h3 className="mt-6 text-lg font-medium text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
