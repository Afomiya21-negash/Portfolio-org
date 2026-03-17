import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-mono text-sm rounded-full mb-6">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient-primary">Afomiya</span>{" "}
            <span className="text-foreground">Mesfin</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            A passionate developer,
            
            building modern web applications with{" "}
            <span className="text-accent font-semibold">React</span>,{" "}
            <span className="text-accent-purple font-semibold">Next.js</span>, and more.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/Afomiya21-negash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full text-muted-foreground hover:text-primary hover:bg-secondary shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/afomiya-mesfin-8924b4317/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full text-muted-foreground hover:text-primary hover:bg-secondary shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:afomiyamesfin@gmail.com"
              className="p-3 bg-card rounded-full text-muted-foreground hover:text-primary hover:bg-secondary shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
