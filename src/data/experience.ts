import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "stihl-internship",
    company: "STIHL",
    startDate: { month: 10, year: 2023 },
    endDate: { month: 3, year: 2024 },
    technologies: ["JavaScript", "Vue", "Azure", "REST"],
    role: {
      en: "Internship – Software Development",
      de: "Praktikum – Softwareentwicklung",
    },
    description: {
      en: [
        "Further development of a diagnostic dataweb frontend",
        "Enhancement of REST API interfaces",
        "Migration of applications to Azure Synapse Analytics",
      ],
      de: [
        "Weiterentwicklung eines diagnostischen Dataweb-Frontends",
        "Erweiterung von REST-API-Schnittstellen",
        "Migration von Anwendungen zu Azure Synapse Analytics",
      ],
    },
  },
  {
    id: "stihl-working-student",
    company: "STIHL",
    startDate: { month: 4, year: 2024 },
    endDate: { month: 6, year: 2024 },
    technologies: ["Python", "DevOps", "CI/CD", "Bamboo"],
    role: {
      en: "Working Student – Software Development",
      de: "Werkstudent – Softwareentwicklung",
    },
    description: {
      en: [
        "Design and implementation of a CI/CD pipeline to automate deployment and data processes",
      ],
      de: [
        "Design und Implementierung einer CI/CD-Pipeline zur Automatisierung von Deployment- und Datenprozessen",
      ],
    },
  },
  {
    id: "stihl-thesis",
    company: "STIHL",
    startDate: { month: 4, year: 2025 },
    endDate: { month: 8, year: 2025 },
    technologies: ["C", "BLE", "UX"],
    role: {
      en: "Bachelor Thesis – Apple Find My Integration",
      de: "Bachelorarbeit – Apple Find My Integration",
    },
    description: {
      en: [
        "Integration of Apple Find My into a BLE-based embedded system",
        "Evaluation of system impact on user experience as well as memory and energy consumption",
      ],
      de: [
        "Integration von Apple Find My in ein BLE-basiertes eingebettetes System",
        "Bewertung der Systemauswirkungen auf Nutzererfahrung sowie Speicher- und Energieverbrauch",
      ],
    },
  },
];
