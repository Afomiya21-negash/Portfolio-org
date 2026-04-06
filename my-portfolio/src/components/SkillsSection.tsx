const skillCategories = [
  {
    title: "Languages",
    color: "primary",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "C++", level: 50 },
      { name: "C#", level: 70 },
      { name: "PHP", level: 40 },
    ],
  },
  {
    title: "Frontend",
    color: "accent",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    color: "purple",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "RESTful APIs", level: 80 },
    ],
  },
  {
    title: "Tools & Design",
    color: "primary",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
    ],
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "accent":
      return {
        bg: "bg-accent",
        bgLight: "bg-accent/20",
        text: "text-accent",
      };
    case "purple":
      return {
        bg: "bg-accent-purple",
        bgLight: "bg-accent-purple/20",
        text: "text-accent-purple",
      };
    default:
      return {
        bg: "bg-primary",
        bgLight: "bg-primary/20",
        text: "text-primary",
      };
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-mono text-sm rounded-full mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies I <span className="text-gradient-accent">Work With</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <h3 className={`text-xl font-bold ${colors.text} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 ${colors.bgLight} rounded-full overflow-hidden`}>
                        <div
                          className={`h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
