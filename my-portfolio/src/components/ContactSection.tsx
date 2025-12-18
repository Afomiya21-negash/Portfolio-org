import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-mono text-sm rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient-accent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's work together!
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:afomiyamesfin@gmail.com"
                className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">afomiyamesfin@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/Afomiya21-negash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/afomiya-mesfin-8924b4317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
