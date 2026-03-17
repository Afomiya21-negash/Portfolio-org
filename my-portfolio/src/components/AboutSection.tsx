import { Code2, Palette, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with Figma",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about finding elegant solutions to complex challenges",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Experienced in collaborative projects and agile development",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-mono text-sm rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who I <span className="text-gradient-primary">Am</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-primary font-semibold">Computer Science graduate</span> from St. Mary's University with 
              a strong curiosity for how technology shapes the way people interact with the world.
               My journey in software development has allowed me to explore both frontend and backend development, 
               building solutions that are not only functional but meaningful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my academic career, I've had the opportunity to work on various projects, 
              from <span className="text-accent font-semibold">desktop applications</span> to 
              <span className="text-accent-purple font-semibold"> full-stack web applications</span>. 
              I believe in writing clean, maintainable code and creating user experiences that 
              make a real difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I’m diving deeper into UI/UX design—learning Figma, exploring design systems, and studying how thoughtful design can elevate a product. 
              I’m driven by the intersection of design and development, where creativity meets logic, and where great ideas become seamless user experiences.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-background rounded-xl shadow-soft">
                <span className="block text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-soft">
                <span className="block text-3xl font-bold text-accent">10+</span>
                <span className="text-sm text-muted-foreground">Technologies</span>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-soft">
                <span className="block text-3xl font-bold text-accent-purple">1+</span>
                <span className="text-sm text-muted-foreground">Year Learning</span>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
