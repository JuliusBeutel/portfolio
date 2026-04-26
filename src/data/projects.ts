import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'guitar-app',
    title: 'Guitar App',
    description:
      'iOS app for browsing songs and chord diagrams with an offline-first approach. Built with SwiftUI and Core Data, supporting custom song entry and persistent storage.',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'iOS'],
    highlight: 'iOS · Core Data',
    githubUrl: 'https://github.com/JuliusBeutel',
  },
  {
    id: 'animal-learning-app',
    title: 'Animal Learning App',
    description:
      'Educational web application for children to learn about animals through interactive content. Developed in an interdisciplinary team combining design, pedagogy, and engineering.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    highlight: 'Web · Education',
    githubUrl: 'https://github.com/JuliusBeutel',
  },
  {
    id: 'bachelor-thesis',
    title: 'Apple Find My Integration',
    description:
      'Embedded firmware project integrating a custom hardware accessory into the Apple Find My Network. Implemented BLE advertisement, offline key rotation, and end-to-end location verification using the Nordic nRF52 SDK.',
    technologies: ['C', 'Nordic SDK', 'BLE', 'Swift'],
    highlight: 'Embedded · BLE',
    githubUrl: 'https://github.com/JuliusBeutel',
  },
];
