import { Award, Clock } from "lucide-react";
import { useState } from "react";
import promptEngineeringCertificate from "@/assets/Prompt engineering certificate.png";
import { Dialog, DialogContent } from "./ui/dialog";

export const CertificatesSection = () => {
  const [isPromptEngineeringOpen, setIsPromptEngineeringOpen] = useState(false);

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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Prompt Engineering Certificate */}
          <div
            className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-transparent hover:border-primary/20 hover:shadow-card transition-all duration-500"
          >
            <button
              type="button"
              onClick={() => setIsPromptEngineeringOpen(true)}
              className="w-full text-left bg-transparent p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="View Prompt Engineering certificate"
            >
              <div className="relative h-64 overflow-hidden bg-background">
                <img
                  src={promptEngineeringCertificate}
                  alt="Prompt Engineering certificate"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-xs rounded-full border border-primary/20">
                    View full
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Prompt Engineering
                </h3>
                <p className="text-sm text-muted-foreground">
                  Prompt Engineering aquired from FindSkill.ai
                </p>
              </div>
            </button>
          </div>

          {/* Coming Soon Card */}
          <div>
            <div className="bg-card rounded-2xl p-12 shadow-soft text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <Award
                      key={i}
                      className="absolute text-primary"
                      style={{
                        top: `${(i * 7) % 100}%`,
                        left: `${(i * 13) % 100}%`,
                        transform: `rotate(${(i * 29) % 360}deg)`,
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
                  I'm currently working on obtaining certifications in various technologies.{" "}
                  Check back soon to see my achievements and professional credentials!
                </p>

                {/* Decorative Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                  {["React", "AWS", "TypeScript", "Node.js", "UI/UX"].map(
                    (cert) => (
                      <span
                        key={cert}
                        className="px-4 py-2 bg-secondary/50 text-muted-foreground text-sm rounded-full border border-dashed border-muted"
                      >
                        {cert}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Certificate Modal */}
        <Dialog
          open={isPromptEngineeringOpen}
          onOpenChange={setIsPromptEngineeringOpen}
        >
          <DialogContent className="max-w-3xl p-0 bg-background overflow-hidden">
            <div className="w-full">
              <img
                src={promptEngineeringCertificate}
                alt="Prompt Engineering certificate full view"
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
