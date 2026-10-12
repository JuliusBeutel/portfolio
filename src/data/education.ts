import type { EducationEntry } from "../types";

export const education: EducationEntry[] = [
  {
    degree: "Master of Science",
    institution: "Hochschule für Technik, Wirtschaft und Kultur Leipzig",
    period: {
      en: "since 2026",
      de: "seit 2026",
    },
    field: {
      en: "Media Informatics",
      de: "Medieninformatik",
    },
    description: {
      en: "Advanced studies in software engineering, human-computer interaction, and modern web technologies.",
      de: "Vertiefung in Advanced Software Engineering, Human-Computer Interaction und modernen Webtechnologien.",
    },
  },
  {
    degree: "Bachelor of Science",
    institution: "Hochschule der Medien Stuttgart",
    period: "2021 – 2025",
    field: {
      en: "Mobile Media",
      de: "Mobile Medien",
    },
    description: {
      en: "Focused on mobile application development, embedded systems, and human-computer interaction. Final thesis conducted in industry at STIHL, integrating Apple Find My into an embedded product.",
      de: "Schwerpunkte auf mobiler Anwendungsentwicklung, eingebetteten Systemen und Mensch-Computer-Interaktion. Abschlussarbeit im industriellen Umfeld bei STIHL zur Integration von Apple Find My in ein eingebettetes Produkt.",
    },
  },
];
