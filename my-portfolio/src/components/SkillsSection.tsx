const groups = [
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Prototyping", "Visual design", "Interface design"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Languages & backend",
    items: ["C++", "C#", "MySQL", "Node.js", "RESTful APIs"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm uppercase tracking-[0.18em] text-accent">Skills & tools</p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight text-foreground">
          Tools I actually use.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Design craft first, with enough engineering fluency to collaborate closely on how a
          product gets built. No arbitrary skill percentages.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {groups.map((group) => (
            <div key={group.title} className="grid gap-4 py-8 sm:grid-cols-[180px_1fr] sm:items-baseline">
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
