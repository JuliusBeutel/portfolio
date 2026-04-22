import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'stihl-internship',
    role: 'Software Development Intern',
    company: 'STIHL',
    period: 'Jun 2022 – Sep 2022',
    description: [
      'Developed internal tooling features within an agile team.',
      'Wrote and maintained unit tests to ensure feature correctness.',
      'Participated in code reviews and incorporated feedback from senior engineers.',
    ],
    technologies: ['TypeScript', 'React', 'Git'],
  },
  {
    id: 'stihl-working-student',
    role: 'Working Student – Software Development',
    company: 'STIHL',
    period: 'Oct 2022 – Mar 2024',
    description: [
      'Implemented BLE communication features for device pairing workflows in a production codebase.',
      'Extended automated test coverage and improved CI pipeline reliability.',
      'Contributed to a cross-platform codebase serving production users.',
    ],
    technologies: ['TypeScript', 'React', 'BLE', 'Git'],
  },
  {
    id: 'stihl-thesis',
    role: 'Bachelor Thesis – Apple Find My Integration',
    company: 'STIHL',
    period: 'Apr 2024 – Sep 2024',
    description: [
      'Integrated Apple Find My Network into a custom embedded system.',
      'Implemented BLE advertisement and cryptographic key rotation on Nordic nRF52.',
      'Validated end-to-end location reporting using real Apple infrastructure.',
    ],
    technologies: ['C', 'Nordic SDK', 'BLE', 'Swift'],
  },
];
