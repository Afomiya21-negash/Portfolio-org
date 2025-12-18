import { Award, Clock } from "lucide-react";

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-mono text-sm rounded-full mb-4">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient-primary">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-12 shadow-soft text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <Award
                    key={i}
                    className="absolute text-primary"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      opacity: 0.3,
                    }}
                    size={24}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-accent animate-pulse-slow" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm currently working on obtaining certifications in various technologies. 
                Check back soon to see my achievements and professional credentials!
              </p>

              {/* Decorative Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {["React", "AWS", "TypeScript", "Node.js", "UI/UX"].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-secondary/50 text-muted-foreground text-sm rounded-full border border-dashed border-muted"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
