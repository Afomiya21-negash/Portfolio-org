import { useState } from "react";
import promptEngineeringCertificate from "@/assets/Prompt engineering certificate.png";
import { Dialog, DialogContent } from "./ui/dialog";

export const CertificatesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="certificates" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm uppercase tracking-[0.18em] text-accent">Certificates</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          Credentials
        </h2>

        <div className="mt-10 max-w-md">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-card"
            aria-label="View Prompt Engineering certificate"
          >
            <div className="bg-secondary/50 p-4">
              <img
                src={promptEngineeringCertificate}
                alt="Prompt Engineering certificate"
                className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-foreground">Prompt Engineering</h3>
              <p className="mt-1 text-sm text-muted-foreground">Acquired from FindSkill.ai</p>
            </div>
          </button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl overflow-hidden bg-background p-0">
            <img
              src={promptEngineeringCertificate}
              alt="Prompt Engineering certificate full view"
              className="max-h-[80vh] w-full object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
