import { ExternalLink, Github, Users } from "lucide-react";
import { Button } from "./ui/button";
import thriveProject from "@/assets/thrive-project.jpg";
import coffeeCup from "@/assets/coffee cup.jpg";
import tourismProject from "@/assets/tourism-project.png";
import shift from "@/assets/shift.jpg";
import coffee from "@/assets/hero image.jpg";
import fitness from "@/assets/fitness 1.jpg";


const projects = [
  {
    title: "Thrive",
    subtitle: "Mental Health Desktop App",
    description:
      "A C# desktop application designed to support mental wellness. Features include soothing exercises, calming soundtracks, mood tracking for daily entries, and a journaling system to document your day-to-day experiences.",
    image: thriveProject,
    technologies: ["C#", ".NET", "WinForms", "MySQL"],
    github: "https://github.com/DoniVerse/Thrive.git",
    live: null,
    isCollab: true,
    color: "primary",
  },
  {
    title: "Buna Te'tu",
    subtitle: "Real-time Chat Application",
    description:
      "A full-stack chat application built with Next.js during my internship at Efuye Gela. Features real-time messaging, user authentication, and a beautiful UI. Demonstrates both frontend and backend integration skills.",
    image: coffeeCup,
    technologies: ["Next.js", "React", "Node.js", "WebSocket"],
    github: null,
    live: "https://chat-app-b12t.vercel.app/",
    isCollab: true,
    color: "accent",
  },
  {
    title: "Tourism Platform",
    subtitle: "Senior Year Project",
    description:
      "An online tourism platform enabling users to browse and book tours. Features include user authentication, tour browsing, booking system with available cars and drivers (with ratings), and Chapa payment integration (test mode).",
    image: tourismProject,
    technologies: ["Next.js", "MySQL", "Chapa API", "Tailwind CSS"],
    github: "https://github.com/Afomiya21-negash/Tes-tour.git",
    live: null,
    isCollab: true,
    isInProgress: true,
    color: "purple",
  },
  {
    title: "Shift",
    subtitle: "Team Member – Shift (Startup)",
    description:
      "Shift is an online job-matching platform designed to connect students with relevant opportunities based on their academic year and level of experience. The platform aims to bridge the gap between students and employers by providing tailored job listings that align with students’ skills, availability, and career stage.",
    image: shift,
    technologies: ["javascript", "firebase"],
    github: null,
    live: "https://shift-4evt.vercel.app",
    isCollab: true,
    isInProgress: true,
    color: "primary",
  },
  {
    title: "Coffee Place Design",
    subtitle: "UI/UX Website Prototype (Figma)",
    description:
      "A coffee shop landing page UI/UX concept with a clean browsing experience, and a smooth flow for viewing details and placing orders.",
    image: coffee,
    technologies: ["UI/UX", "Figma"],
    figma:
      "https://www.figma.com/proto/RknacPUBX7gnS3p98nll9Q/Coffee-design?node-id=3-3&t=cVeBDISmWrC7VCy1-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
    github: null,
    live: null,
    color: "accent",
  },
  {
    title: "Fitness Mobile App",
    subtitle: "UI/UX Mobile Prototype (Figma)",
    description:
      "A basic fitness mobile app UI/UX design focused on workout navigation, simple tracking, and easy access to routines and progress.",
    image:fitness,
    technologies: ["UI/UX", "Figma", "Mobile"],
    figma:
      "https://www.figma.com/proto/IgspwNnLt8TSWUEJCwli8b/fitness-app?node-id=1-3&p=f&t=07wAsrAB986zqMAX-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2",
    github: null,
    live: null,
    color: "purple",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "accent":
      return "border-accent hover:shadow-accent/20";
    case "purple":
      return "border-accent-purple hover:shadow-accent-purple/20";
    default:
      return "border-primary hover:shadow-primary/20";
  }
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-purple/10 text-accent-purple font-mono text-sm rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-2 border-transparent ${getColorClasses(project.color)}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.isInProgress && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    In Progress
                  </div>
                )}
                {project.isCollab && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                    <Users size={12} />
                    Collaboration
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="accent" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.figma && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Figma
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
