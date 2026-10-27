import { SectionLink } from "./SectionLink";

const links = [
  { hash: "work", label: "Work" },
  { hash: "about", label: "About" },
  { hash: "projects", label: "Development" },
  { hash: "contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>© {currentYear} Afomiya Mesfin</p>
        <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer">
          {links.map((link) => (
            <SectionLink key={link.hash} hash={link.hash} className="hover:text-foreground">
              {link.label}
            </SectionLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};
