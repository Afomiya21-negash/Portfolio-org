import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode, MouseEvent } from "react";

type SectionLinkProps = {
  hash: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export const SectionLink = ({ hash, className, children, onNavigate }: SectionLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate?.();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      return;
    }
    const el = document.getElementById(hash);
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", `/#${hash}`);
  };

  return (
    <a href={`/#${hash}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
