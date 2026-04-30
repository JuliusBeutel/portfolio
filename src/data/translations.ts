import type { Lang } from "../types";

interface TranslationData {
  nav: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
  };
  hero: { role: string; tagline: string; contact: string };
  sections: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
  };
  projects: {
    githubLabel: string;
    screenshot: string;
    clickForDetails: string;
  };
  experience: { monthNames: string[] };
  footer: { legalLabel: string; privacyLabel: string };
}

export const translations: Record<Lang, TranslationData> = {
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
    },
    hero: {
      role: "Software Engineer",
      tagline:
        "I am building modern applications across mobile, web and embedded systems.",
      contact: "Contact me",
    },
    sections: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
    },
    projects: {
      githubLabel: "View on GitHub",
      screenshot: "screenshot",
      clickForDetails: "Click for details",
    },
    experience: {
      monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    footer: {
      legalLabel: "Legal Notice",
      privacyLabel: "Privacy Policy",
    },
  },

  de: {
    nav: {
      experience: "Berufserfahrung",
      projects: "Projekte",
      skills: "Fähigkeiten",
      education: "Bildungsweg",
    },
    hero: {
      role: "Software-Entwickler",
      tagline:
        "Ich entwickle moderne Anwendungen für mobile, Web- und Embedded-Systeme.",
      contact: "Kontakt",
    },
    sections: {
      experience: "Berufserfahrung",
      projects: "Projekte",
      skills: "Fähigkeiten",
      education: "Bildungsweg",
    },
    projects: {
      githubLabel: "Auf GitHub ansehen",
      screenshot: "Screenshot",
      clickForDetails: "Details ansehen",
    },
    experience: {
      monthNames: [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ],
    },
    footer: {
      legalLabel: "Impressum",
      privacyLabel: "Datenschutz",
    },
  },
};
