import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useHashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (pathname !== "/") {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
};
