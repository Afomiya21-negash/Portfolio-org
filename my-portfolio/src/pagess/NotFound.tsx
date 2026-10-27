import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="font-serif text-6xl text-accent">404</p>
        <h1 className="mt-4 font-serif text-3xl text-foreground">This page isn’t here.</h1>
        <p className="mt-3 text-muted-foreground">The link may be outdated, or the project moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
