import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "stihl-internship",
    role: "Internship – Software Development",
    company: "STIHL",

    startDate: { month: 10, year: 2023 },
    endDate: { month: 3, year: 2024 },
    description: [
      "Further development of a diagnostic dataweb frontend",
      "Enhancement of REST API interfaces",
      "Migration of applications to Azure Synapse Analytics",
    ],
    technologies: ["JavaScript", "Vue", "Azure", "REST"],
  },
  {
    id: "stihl-working-student",
    role: "Working Student – Software Development",
    company: "STIHL",

    startDate: { month: 4, year: 2024 },
    endDate: { month: 6, year: 2024 },
    description: [
      "Design and implementation of a CI/CD pipeline to automate deployment and data processes",
    ],
    technologies: ["Python", "DevOps", "CI/CD"],
  },
  {
    id: "stihl-thesis",
    role: "Bachelor Thesis – Apple Find My Integration",
    company: "STIHL",

    startDate: { month: 4, year: 2025 },
    endDate: { month: 8, year: 2025 },
    description: [
      "Integration of Apple Find My into a BLE-based embedded system",
      "Evaluation of system impact on user experience as well as memory and energy consumption",
    ],
    technologies: ["C", "BLE", "UX"],
  },
];
