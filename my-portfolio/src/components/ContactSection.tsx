import { ArrowUpRight } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "afomiyamesfin@gmail.com",
    href: "mailto:afomiyamesfin@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Afomiya Mesfin",
    href: "https://www.linkedin.com/in/afomiya-mesfin-8924b4317/",
  },
  {
    label: "GitHub",
    value: "Afomiya21-negash",
    href: "https://github.com/Afomiya21-negash",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-[2rem] bg-primary px-8 py-16 text-primary-foreground sm:px-14 sm:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-primary-foreground/60">Contact</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight sm:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-lg text-primary-foreground/75 leading-relaxed">
            I’m based in Addis Ababa and open to design conversations — internships, junior
            UI/UX roles, and collaborations on civic or product work. Write whenever you’re
            ready.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group border-t border-primary-foreground/15 pt-5"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/50">
                  {item.label}
                </p>
                <p className="mt-2 inline-flex items-center gap-1 text-lg">
                  {item.value}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
