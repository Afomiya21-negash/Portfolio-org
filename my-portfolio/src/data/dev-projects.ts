import thriveProject from "@/assets/thrive-project.jpg";
import coffeeCup from "@/assets/coffee cup.jpg";
import tourismProject from "@/assets/tourism-project.png";
import shift from "@/assets/shift.jpg";
import coffee from "@/assets/hero image.jpg";
import adminPanel from "@/assets/admin-panel.png";

export type LinkedProject = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string | null;
  live?: string | null;
  figma?: string | null;
  isCollab?: boolean;
  isInProgress?: boolean;
};

export const developmentProjects: LinkedProject[] = [
  {
    title: "Thrive",
    subtitle: "Mental Health Desktop App",
    description:
      "A C# desktop application designed to support mental wellness. Features include soothing exercises, calming soundtracks, mood tracking for daily entries, and a journaling system to document your day-to-day experiences.",
    image: thriveProject,
    technologies: ["C#", ".NET", "WinForms", "MySQL"],
    github: "https://github.com/DoniVerse/Thrive.git",
    live: null,
    isCollab: true,
  },
  {
    title: "Buna Te'tu",
    subtitle: "Real-time Chat Application",
    description:
      "A full-stack chat application built with Next.js during my internship at Efuye Gela. Features real-time messaging, user authentication, and a beautiful UI. Demonstrates both frontend and backend integration skills.",
    image: coffeeCup,
    technologies: ["Next.js", "React", "Node.js", "WebSocket"],
    github: "https://github.com/Afomiya21-negash/chat-app.git",
    live: null,
    isCollab: true,
  },
  {
    title: "Tourism Platform",
    subtitle: "Senior Year Project",
    description:
      "An online tourism platform enabling users to browse and book tours. Features include user authentication, tour browsing, booking system with available cars and drivers (with ratings), and Chapa payment integration (test mode).",
    image: tourismProject,
    technologies: ["Next.js", "MySQL", "Chapa API", "Tailwind CSS"],
    github: "https://github.com/Afomiya21-negash/Tes-tour.git",
    live: null,
    isCollab: true,
    isInProgress: true,
  },
  {
    title: "Shift",
    subtitle: "Team Member – Shift (Startup)",
    description:
      "Shift is an online job-matching platform designed to connect students with relevant opportunities based on their academic year and level of experience. The platform aims to bridge the gap between students and employers by providing tailored job listings that align with students’ skills, availability, and career stage.",
    image: shift,
    technologies: ["javascript", "firebase"],
    github: "https://github.com/Afomiya21-negash/Shift-.git",
    live: null,
    isCollab: true,
    isInProgress: true,
  },
];

export const designExplorations: LinkedProject[] = [
  {
    title: "Coffee Place Design",
    subtitle: "UI/UX Website Design (Figma)",
    description:
      "A coffee shop landing page UI/UX concept with a clean browsing experience, and a smooth flow for viewing details and placing orders.",
    image: coffee,
    technologies: ["UI/UX", "Figma"],
    figma: "https://www.figma.com/design/RknacPUBX7gnS3p98nll9Q/Coffee-design?t=W6ZIFGMh5MuGYNPd-1",
    github: null,
    live: null,
  },
  {
    title: "Service Management Dashboard",
    subtitle: "UI/UX Mobile Design (Figma)",
    description:
      "A mobile admin panel UI/UX design featuring a service management dashboard with request tracking, status cards, and recent request listings.",
    image: adminPanel,
    technologies: ["UI/UX", "Figma", "Mobile"],
    figma: "https://www.figma.com/design/Or4pQTrGljgAkSoX2Jelk3/admin-panel?node-id=0-1&t=W6ZIFGMh5MuGYNPd-1",
    github: null,
    live: null,
  },
];
