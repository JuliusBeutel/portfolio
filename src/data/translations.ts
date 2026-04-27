import type { Lang } from '../types';

interface TranslationData {
  nav: { experience: string; projects: string; skills: string; education: string };
  hero: { role: string; tagline: string; contact: string };
  sections: { experience: string; projects: string; skills: string; education: string };
  skills: { categories: Record<string, string> };
  projects: { githubLabel: string; screenshot: string };
  experience: { monthNames: string[] };
  footer: { legalLabel: string; privacyLabel: string };
}

export const translations: Record<Lang, TranslationData> = {
  en: {
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
    },
    hero: {
      role: 'Software Engineer',
      tagline: 'I build mobile and embedded software — from iOS apps to BLE firmware and everything in between.',
      contact: 'Contact me',
    },
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
    },
    skills: {
      categories: {
        Frontend: 'Frontend',
        Mobile: 'Mobile',
        Embedded: 'Embedded',
        Tools: 'Tools',
      },
    },
    projects: {
      githubLabel: 'View on GitHub',
      screenshot: 'screenshot',
    },
    experience: {
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    footer: {
      legalLabel: 'Legal Notice',
      privacyLabel: 'Privacy Policy',
    },
  },

  de: {
    nav: {
      experience: 'Erfahrung',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      education: 'Ausbildung',
    },
    hero: {
      role: 'Software-Entwickler',
      tagline: 'Ich entwickle mobile und eingebettete Software – von iOS-Apps über BLE-Firmware bis hin zu allem dazwischen.',
      contact: 'Kontakt',
    },
    sections: {
      experience: 'Erfahrung',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      education: 'Ausbildung',
    },
    skills: {
      categories: {
        Frontend: 'Frontend',
        Mobile: 'Mobil',
        Embedded: 'Eingebettet',
        Tools: 'Werkzeuge',
      },
    },
    projects: {
      githubLabel: 'Auf GitHub ansehen',
      screenshot: 'Screenshot',
    },
    experience: {
      monthNames: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    },
    footer: {
      legalLabel: 'Impressum',
      privacyLabel: 'Datenschutz',
    },
  },
};
