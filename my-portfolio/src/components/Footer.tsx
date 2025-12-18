const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Year */}
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Afomiya Mesfin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
