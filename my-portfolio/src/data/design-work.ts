import superappHome from "@/assets/work/superapp-home.png";
import superappCreateAccount from "@/assets/work/superapp-create-account.png";
import superappSignin from "@/assets/work/superapp-signin.png";
import superappCityServices from "@/assets/work/superapp-city-services.png";
import superappServiceDetail from "@/assets/work/superapp-service-detail.png";
import superappServices from "@/assets/work/superapp-services.png";
import superappApplications from "@/assets/work/superapp-applications.png";
import superappAccount from "@/assets/work/superapp-account.png";
import trafficLogin from "@/assets/work/traffic-login.png";
import trafficWanted from "@/assets/work/traffic-wanted.png";
import trafficChargeDetail from "@/assets/work/traffic-charge-detail.png";
import trafficChargesList from "@/assets/work/traffic-charges-list.png";
import trafficHome from "@/assets/work/traffic-home.png";
import trafficAddCharge from "@/assets/work/traffic-add-charge.png";
import bookitLanding from "@/assets/work/bookit-landing.png";
import bookitServices from "@/assets/work/bookit-services.png";
import bookitSignin from "@/assets/work/bookit-signin.png";
import bookitAbout from "@/assets/work/bookit-about.png";
import bookitSignup from "@/assets/work/bookit-signup.png";
import bookitBooking from "@/assets/work/bookit-booking.png";
import bookitSubcity from "@/assets/work/bookit-subcity.png";
import bookitTimeslots from "@/assets/work/bookit-timeslots.png";
import bookitRequirements from "@/assets/work/bookit-requirements.png";

export type MediaKind = "phone" | "web";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  kind: MediaKind;
};

export type DesignProject = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  role: string;
  goals: string[];
  approach: string;
  decisions: { title: string; body: string }[];
  cover: string;
  coverAlt: string;
  preview: string[];
  gallery: GalleryImage[];
};

export const designProjects: DesignProject[] = [
  {
    slug: "shaggar-super-app",
    title: "Shaggar Super App",
    category: "Mobile App Design · Civic Technology · UI/UX",
    shortDescription:
      "A citizen-focused mobile super app that brings Shaggar City services — information, e-services, applications, payments, and appointments — into one place.",
    overview:
      "Shaggar Super App is a civic mobile product for residents of Shaggar City. It gathers municipal information, service discovery, applications, status tracking, payments, and appointment booking so people can handle everyday city tasks from a single home screen instead of hunting across separate channels.",
    problem:
      "City services are easy to lose across offices, paper processes, and disconnected digital tools. Residents need a single, readable place to find a service, start an application, see where it stands, pay a charge, or book an appointment — without learning a new system for every department.",
    role: "UI/UX Designer. [Add collaborators, duration, or additional responsibilities here.]",
    goals: [
      "Give citizens a clear home for city information, alerts, and shortcuts.",
      "Make services searchable and grouped so they can be found without memorizing departments.",
      "Show application status, payments, and appointments in language that is easy to scan.",
      "Keep sign-in and account tools simple enough for a wide range of residents.",
    ],
    approach:
      "The interface is organized around five everyday destinations: Home, Services, Application, Discover, and Account. Home acts as a hub — greeting, weather, city alerts, and quick actions such as Top Applications, Report Issue, Transport, Book It, Health, City Map, Digital ID, and Permit. Deeper work happens in Services and Applications, while payments and identity live close to the person's account.",
    decisions: [
      {
        title: "A hub, not a long menu",
        body: "The home dashboard leads with weather, city alerts, and a compact grid of shortcuts. The goal is to help someone reach a frequent task in one or two taps, then fall back to search and categories when the need is less common.",
      },
      {
        title: "Service discovery in layers",
        body: "Services open with search, popular cards, and category lists. A service page shows processing time, cost, provider, required documents, and delivery mode (Physical, Online, or Outreach) before the person applies.",
      },
      {
        title: "Status that can be checked at a glance",
        body: "The Applications tab summarizes journey progress, payment dues, and appointments, then lists previous applications with a reference number and status. Empty states point people back to Browse Services instead of leaving a blank screen.",
      },
    ],
    cover: superappHome,
    coverAlt: "Shaggar Super App home dashboard with weather, alerts, and quick actions",
    preview: [superappHome, superappServices, superappApplications],
    gallery: [
      {
        src: superappHome,
        alt: "Home dashboard showing weather, city alerts, quick actions, and application tracking",
        caption: "Home — a civic hub with weather, alerts, shortcuts, and activity.",
        kind: "phone",
      },
      {
        src: superappSignin,
        alt: "Welcome back sign-in screen with phone number, password, and fingerprint option",
        caption: "Sign in with phone number, password, or fingerprint.",
        kind: "phone",
      },
      {
        src: superappCreateAccount,
        alt: "Create account flow step one for entering a phone number",
        caption: "Account creation starts with a clear, stepped phone-number flow.",
        kind: "phone",
      },
      {
        src: superappServices,
        alt: "Services tab with search, popular services, and category list",
        caption: "Services — search, popular cards, and categories.",
        kind: "phone",
      },
      {
        src: superappCityServices,
        alt: "Shaggar City Services grouped into sectors, community, safety, education, health, and transport",
        caption: "A grouped directory for city sectors and public services.",
        kind: "phone",
      },
      {
        src: superappServiceDetail,
        alt: "Service detail with processing time, cost, documents, and delivery modes",
        caption: "Service detail before apply: time, cost, documents, delivery mode.",
        kind: "phone",
      },
      {
        src: superappApplications,
        alt: "Applications tab with journey summary, payment dues, and empty state",
        caption: "Applications — journey summary, dues, and an honest empty state.",
        kind: "phone",
      },
      {
        src: superappAccount,
        alt: "Account screen with Digital City ID, stats, and settings",
        caption: "Account — identity, applications, appointments, and settings.",
        kind: "phone",
      },
    ],
  },
  {
    slug: "bookit",
    title: "BookIt",
    category: "Web App Design · Appointment Booking · UI/UX",
    shortDescription:
      "A Shaggar City appointment-booking web app that helps citizens prepare and schedule visits for rental agreement and land clearance services.",
    overview:
      "BookIt is a web product in the Shaggar City digital-service ecosystem. It is designed so residents can submit a request online, understand what to bring, pick a subcity, and walk into a scheduled visit with the paperwork already in motion — especially for rental agreements and land clearance.",
    problem:
      "Municipal rental agreement services often require multiple office visits and create long queues. BookIt addresses this by allowing citizens to book appointments online, understand requirements beforehand, and visit the office only for their scheduled appointment time.",
    role: "UI/UX Designer. [Add collaborators, duration, or additional responsibilities here.]",
    goals: [
      "Explain the two core services before someone starts a request.",
      "Make the booking journey a five-step path that is always visible.",
      "Show only services and slots that belong to the chosen subcity.",
      "Give people a receipt, cancellation, and a clear list of what to bring.",
    ],
    approach:
      "The public site introduces BookIt as an official city service, then splits into Rental Agreement and Land Clearance. After sign-in, the citizen portal keeps upcoming appointments on the left and the booking wizard on the right. Steps are Subcity → Service → Requirement → Time slot → Confirm, so progress is always on screen.",
    decisions: [
      {
        title: "A public story, then a working tool",
        body: "The marketing pages explain why the portal exists — fewer wasted office visits, visible requirements, officer-reviewed appointments — before asking anyone to sign in. The working product then stays quiet and practical.",
      },
      {
        title: "Location first",
        body: "Availability depends on subcity. The first booking step asks where you live and lists places such as Nifas Silk, Kirkos, and Kolfe Keranio, so later steps only show services those offices actually offer.",
      },
      {
        title: "Requirements before the calendar",
        body: "The third step lists documents to have ready and offers a downloadable form. Time slots come after, so people do not book a visit they cannot prepare for.",
      },
      {
        title: "Slots that show capacity",
        body: "Open and closed windows are labeled with times and remaining capacity (for example 12/32). Closed slots stay visible instead of disappearing, which makes the office's day easier to understand.",
      },
    ],
    cover: bookitLanding,
    coverAlt: "BookIt rental portal landing page with a rental agreement document mockup",
    preview: [bookitLanding, bookitSubcity, bookitTimeslots],
    gallery: [
      {
        src: bookitLanding,
        alt: "BookIt landing page introducing rental services handled with clarity",
        caption: "Landing — an official city portal for rental and land services.",
        kind: "web",
      },
      {
        src: bookitServices,
        alt: "Two core services: Rental Agreement and Land Clearance",
        caption: "Two core services, one process.",
        kind: "web",
      },
      {
        src: bookitAbout,
        alt: "About page describing transparency, one visit, officer accountability, and equal access",
        caption: "About — the principles behind the service.",
        kind: "web",
      },
      {
        src: bookitSignup,
        alt: "Create account form with full name, phone, optional email, and password",
        caption: "Sign up with name, phone, and password.",
        kind: "web",
      },
      {
        src: bookitSignin,
        alt: "Split-screen sign-in with phone number and password",
        caption: "Sign in to book and manage appointments.",
        kind: "web",
      },
      {
        src: bookitSubcity,
        alt: "Booking step one asking where the citizen lives, with subcity cards",
        caption: "Step 1 — pick a subcity so services stay local.",
        kind: "web",
      },
      {
        src: bookitBooking,
        alt: "Booking step two with Renters Agreement, Land Clearance, and Title transfer cards",
        caption: "Step 2 — choose the service you need.",
        kind: "web",
      },
      {
        src: bookitRequirements,
        alt: "Booking step three listing required documents and a downloadable form",
        caption: "Step 3 — what to bring before the visit.",
        kind: "web",
      },
      {
        src: bookitTimeslots,
        alt: "Booking step four with a week of dates and open or closed time slots",
        caption: "Step 4 — open and closed slots with remaining capacity.",
        kind: "web",
      },
    ],
  },
  {
    slug: "shaggar-traffic",
    title: "Shaggar Traffic",
    category: "Mobile App Design · Civic Technology · Operational Tools",
    shortDescription:
      "A mobile tool for Shaggar City traffic officers and crime controllers to manage violations, issue charges, and review wanted vehicles.",
    overview:
      "Shaggar Traffic (TMS — Traffic Management System) is an operational mobile app for officers in the field. It supports signing in, reviewing a day's charges, adding a new charge, inspecting unpaid records, and opening wanted-vehicle details when a plate needs attention.",
    problem:
      "Traffic work happens quickly and often outdoors. Officers need a compact interface that makes status obvious — unpaid versus paid, high-priority wanted vehicles, and the details of a charge — without burying actions behind dense forms.",
    role: "UI/UX Designer. [Add collaborators, duration, or additional responsibilities here.]",
    goals: [
      "Give officers a daily snapshot of unpaid and paid charges.",
      "Make adding a charge a guided, two-step form.",
      "Keep lists filterable (All, Paid, Unpaid) and searchable.",
      "Present wanted-vehicle and charge records with a clear information hierarchy.",
    ],
    approach:
      "The product is structured around three tabs: Home, Charges, and Wanted. Home welcomes the officer, flags unpaid charges, and shows an overview. Charges is a working list. Adding a charge splits personal information from location details. Detail screens use stacked cards so owner, vehicle, violation, and payment facts stay distinct.",
    decisions: [
      {
        title: "Today at the top",
        body: "Home leads with the officer's name and badge, a warning for unpaid charges, and a simple paid/unpaid split. Recent charges sit below so the day can be reviewed without opening the full list.",
      },
      {
        title: "Status as color, not decoration",
        body: "Unpaid and paid labels, list filters, and overview tiles use the same language. The point is to scan a stack of records and know which ones still need action.",
      },
      {
        title: "Import, then complete",
        body: "The add-charge flow can search a licence ID to bring in driver details from a previous charge, then continues with name, phone, punishable type, plate, violation level, price, place, and age before location details.",
      },
      {
        title: "Records that read like a briefing",
        body: "Wanted-vehicle and charge-detail screens group facts into Owner, Vehicle, Reason, and Actions — or Charge, Driver, Violation, Route, and Payment — so an officer can brief themselves in order.",
      },
    ],
    cover: trafficHome,
    coverAlt: "Shaggar Traffic officer home with charges overview and recent records",
    preview: [trafficHome, trafficChargesList, trafficWanted],
    gallery: [
      {
        src: trafficLogin,
        alt: "TMS Shaggar login with phone number and password",
        caption: "Sign in to the Traffic Management System.",
        kind: "phone",
      },
      {
        src: trafficHome,
        alt: "Officer home dashboard with unpaid and paid charge overview",
        caption: "Home — today's unpaid and paid charges.",
        kind: "phone",
      },
      {
        src: trafficChargesList,
        alt: "Traffic charges list with All, Paid, and Unpaid filters",
        caption: "Charges — searchable list with payment status.",
        kind: "phone",
      },
      {
        src: trafficChargeDetail,
        alt: "Charge details with pending payment, driver, violation, and penalty amount",
        caption: "Charge detail — facts grouped by section.",
        kind: "phone",
      },
      {
        src: trafficAddCharge,
        alt: "Add charges step one with driver import and personal information fields",
        caption: "Add a charge — import a driver, then complete the record.",
        kind: "phone",
      },
      {
        src: trafficWanted,
        alt: "Wanted vehicle details for plate AA 34521 with owner, vehicle, reason, and report action",
        caption: "Wanted vehicle — plate, details, reason, and report sighting.",
        kind: "phone",
      },
    ],
  },
];

export function getDesignProject(slug: string) {
  return designProjects.find((project) => project.slug === slug);
}
