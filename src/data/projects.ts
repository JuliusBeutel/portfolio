import type { Project } from "../types";
import guitarThumbnail from "../assets/guitar_thumbnail.png";
import petsThumbnail from "../assets/pets_thumbnail.png";
import bazarifyThumbnail from "../assets/bazarify_thumbnail.png";

export const projects: Project[] = [
  {
    id: "guitar-app",
    title: "GuitAR",
    keywords: ["visionOS", "Swift", "Spatial UI"],
    technologies: ["Swift", "SwiftUI", "visionOS"],
    highlight: "visionOS · AR",
    imageUrl: guitarThumbnail,
    githubUrl: "https://github.com/JuliusBeutel/guitAR",
    shortDescription: {
      en: "A visionOS app for Apple Vision Pro to learn guitar.",
      de: "Eine visionOS-App für die Apple Vision Pro zum Gitarre lernen.",
    },
    description: {
      en: "Developed in a team of three developers, GuitAR is a visionOS app designed to help users learn guitar in an immersive way. Users can select chords and see them directly visualized on a virtual guitar neck. The app focuses on intuitive interaction and spatial UI.",
      de: "GuitAR wurde in einem Team aus drei Entwicklern entwickelt und ist eine visionOS-App, die das Gitarre lernen auf immersive Weise ermöglicht. Nutzer können Akkorde auswählen und diese direkt auf einem virtuellen Gitarrenhals visualisiert sehen. Der Fokus liegt auf intuitiver Bedienung und räumlicher UI.",
    },
  },
  {
    id: "animal-learning-app",
    title: "PETucation",
    keywords: ["React", "Education", "UX / UI"],
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    highlight: "Web · Education",
    imageUrl: petsThumbnail,
    githubUrl: "https://github.com/schule4-0/pets",
    shortDescription: {
      en: "A web app for playful learning about pets.",
      de: "Eine Web-App zum spielerischen Lernen über Haustiere.",
    },
    description: {
      en: "PETucation was developed as an interdisciplinary project in collaboration with the University of Education Weingarten. The project involved a team of around 15 people. Together with Schule 4.0, we designed and implemented a learning application for children. The application was later tested in primary schools.",
      de: "PETucation wurde als interdisziplinäres Projekt in Zusammenarbeit mit der Pädagogischen Hochschule Weingarten entwickelt. Insgesamt waren etwa 15 Personen beteiligt. Gemeinsam mit Schule 4.0 wurde eine Lernanwendung für Kinder konzipiert und umgesetzt. Die Anwendung wurde anschließend in Grundschulen getestet.",
    },
  },
  {
    id: "bazarify",
    title: "Bazarify",
    keywords: ["JavaScript", "React", "Data Tracking"],
    technologies: ["JavaScript", "React"],
    highlight: "Web · POS",
    imageUrl: bazarifyThumbnail,
    githubUrl: "https://github.com/JuliusBeutel",
    shortDescription: {
      en: "A POS system for managing sales at local events.",
      de: "Ein Kassensystem zur Verwaltung von Verkäufen bei lokalen Veranstaltungen.",
    },
    description: {
      en: "Bazarify is a point-of-sale system developed for a local ski club. Users can register products and generate printable barcodes, which are attached to items. During checkout, products can be scanned using a barcode scanner. After the event, the system provides statistics such as sold and unclaimed items.",
      de: "Bazarify ist ein Kassensystem, das für einen lokalen Skiverein entwickelt wurde. Produkte können erfasst und mit Barcodes versehen werden. Beim Verkauf werden die Artikel einfach per Barcode-Scanner erfasst. Nach dem Basar liefert das System Statistiken, z. B. zu verkauften oder nicht abgeholten Artikeln.",
    },
  },
];
