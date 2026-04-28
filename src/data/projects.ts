import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "guitar-app",
    title: "GuitAR",
    technologies: ["Swift", "SwiftUI", "Core Data", "iOS"],
    highlight: "iOS · Core Data",
    imageUrl: "/src/assets/guitar_thumbnail.png",
    githubUrl: "https://github.com/JuliusBeutel/guitAR",
    description: {
      en: "iOS app for browsing songs and chord diagrams with an offline-first approach. Built with SwiftUI and Core Data, supporting custom song entry and persistent storage.",
      de: "iOS-App zum Durchsuchen von Songs und Akkorddiagrammen mit einem Offline-First-Ansatz. Entwickelt mit SwiftUI und Core Data, mit Unterstützung für benutzerdefinierte Song-Einträge und persistente Datenspeicherung.",
    },
  },
  {
    id: "animal-learning-app",
    title: "Animal Learning App",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    imageUrl: "/src/assets/pets_thumbnail.png",
    highlight: "Web · Education",
    githubUrl: "https://github.com/schule4-0/pets",
    description: {
      en: "Educational web application for children to learn about animals through interactive content. Developed in an interdisciplinary team combining design, pedagogy, and engineering.",
      de: "Lern-Webanwendung für Kinder zum Kennenlernen von Tieren durch interaktive Inhalte. Entwickelt in einem interdisziplinären Team aus Design, Pädagogik und Ingenieurwesen.",
    },
  },
  {
    id: "bachelor-thesis",
    title: "Apple Find My Integration",
    technologies: ["C", "Nordic SDK", "BLE", "Swift"],
    imageUrl: "/src/assets/bazarify_thumbnail.png",
    highlight: "Embedded · BLE",
    githubUrl: "https://github.com/JuliusBeutel",

    description: {
      en: "Embedded firmware project integrating a custom hardware accessory into the Apple Find My Network. Implemented BLE advertisement, offline key rotation, and end-to-end location verification using the Nordic nRF52 SDK.",
      de: "Embedded-Firmware-Projekt zur Integration eines Hardware-Zubehörs in das Apple Find My Netzwerk. Implementierung von BLE-Advertisement, Offline-Schlüsselrotation und Ende-zu-Ende-Standortverifikation mit dem Nordic nRF52 SDK.",
    },
  },
];
