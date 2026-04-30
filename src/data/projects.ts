import type { Project } from "../types";
import guitarThumbnail from "../assets/experience/guitar/guitar_thumbnail.png";
import guitarPlaying from "../assets/experience/guitar/guitar_playing.png";
import guitarPreview from "../assets/experience/guitar/guitar_preview.png";
import petsThumbnail from "../assets/experience/pets/pets_thumbnail.png";
import petsTrailer from "../assets/experience/pets/pets_trailer.mp4";
import bazarifyThumbnail from "../assets/experience/bazarify/bazarify_thumbnail.png";
import bazarifyAbholung from "../assets/experience/bazarify/bazarify_abholung.png";
import bazarifyAnnahme from "../assets/experience/bazarify/bazarify_annahme.png";

export const projects: Project[] = [
  {
    id: "guitar-app",
    title: "GuitAR",
    keywords: ["visionOS", "Swift", "Spatial UI"],
    technologies: ["Swift", "SwiftUI", "visionOS"],
    highlight: "visionOS · AR",
    imageUrl: guitarThumbnail,
    detailImages: [guitarPlaying, guitarPreview],
    githubUrl: "https://github.com/JuliusBeutel/guitAR",
    shortDescription: {
      en: "A visionOS app for Apple Vision Pro to learn guitar.",
      de: "Eine visionOS-App für die Apple Vision Pro zum Gitarre lernen.",
    },
    description: {
      en: "guitAR is a visionOS app for Apple Vision Pro that helps beginners learn guitar in an immersive, spatial environment. Developed in a team of three at HdM Stuttgart, the app lets users browse songs and see chord fingerings visualised as overlays directly on their physical guitar — showing exactly which fingers to place and where. The experience is fully designed for the Vision Pro's spatial interface.",
      de: "guitAR ist eine visionOS-App für die Apple Vision Pro, die Anfängern das Gitarrenlernen auf immersive Weise ermöglicht. Im Rahmen eines Hochschulprojekts an der HdM Stuttgart von einem dreiköpfigen Team entwickelt, zeigt die App Akkorde als visuelle Overlays direkt auf der echten Gitarre — mit genauer Fingerplatzierung in Echtzeit. Die Benutzeroberfläche ist vollständig für die räumliche Darstellung der Vision Pro konzipiert.",
    },
  },
  {
    id: "animal-learning-app",
    title: "PETucation",
    keywords: ["Vue.js", "Education", "UX / UI"],
    technologies: ["TypeScript", "Vue.js", "HTML", "CSS"],
    highlight: "Web · Education",
    imageUrl: petsThumbnail,
    detailVideo: petsTrailer,
    githubUrl: "https://github.com/schule4-0/pets",
    shortDescription: {
      en: "A web app for playful learning about pets.",
      de: "Eine Web-App zum spielerischen Lernen über Haustiere.",
    },
    description: {
      en: "PETucation is a web-based learning app for first-grade students, teaching them responsible dog care through five interactive mini-games — covering feeding, walking, washing, packing equipment, and a quiz. It was created in an interdisciplinary team of 15 people in cooperation with Schule 4.0 and the Pädagogische Hochschule Weingarten, and successfully tested with 20 first-grade students at a primary school in Korntal.",
      de: "PETucation ist eine webbasierte Lernapp für Erstklässler, die ihnen den verantwortungsvollen Umgang mit Hunden in fünf interaktiven Minispielen näherbringt — zu den Themen Füttern, Gassi gehen, Waschen, Ausrüstung packen und Quiz. Sie entstand in einem interdisziplinären Team von 15 Personen in Kooperation mit Schule 4.0 und der Pädagogischen Hochschule Weingarten und wurde erfolgreich mit 20 Erstklässlern an einer Grundschule in Korntal getestet.",
    },
  },
  {
    id: "bazarify",
    title: "Bazarify",
    keywords: ["React", "Node.js", "MongoDB"],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
    highlight: "Web · POS",
    imageUrl: bazarifyThumbnail,
    detailImages: [bazarifyAnnahme, bazarifyAbholung],
    githubUrl: "https://github.com/JuliusBeutel",
    shortDescription: {
      en: "A POS system for managing sales at local events.",
      de: "Ein Kassensystem zur Verwaltung von Verkäufen bei lokalen Veranstaltungen.",
    },
    description: {
      en: "Bazarify is a digital point-of-sale system developed in cooperation with the ski club Laichingen to replace their paper-based annual ski bazaar. Built by a team of four, the app lets sellers register items and attach printed barcodes. During the event, staff scan items at checkout, and afterwards the system provides a full sales overview including which items were sold and which went uncollected.",
      de: "Bazarify ist ein digitales Kassensystem, das in Kooperation mit dem Skiverein Laichingen entwickelt wurde, um deren papierbasierten Jahresbasar zu digitalisieren. Ein vierköpfiges Team hat die App umgesetzt, mit der Verkäufer ihre Artikel erfassen und mit gedruckten Barcodes versehen. Beim Basar werden Artikel per Scanner abgerechnet, und anschließend liefert das System eine vollständige Übersicht inklusive verkaufter und nicht abgeholter Artikel.",
    },
  },
];
