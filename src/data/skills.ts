import type { Skill } from '../types';

const cdn = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const skills: Skill[] = [
  { id: 'js',    name: 'JavaScript', category: 'Frontend',  iconUrl: `${cdn}/javascript/javascript-original.svg`, proficiency: 85 },
  { id: 'ts',    name: 'TypeScript', category: 'Frontend',  iconUrl: `${cdn}/typescript/typescript-original.svg`, proficiency: 80 },
  { id: 'react', name: 'React',      category: 'Frontend',  iconUrl: `${cdn}/react/react-original.svg`,           proficiency: 80 },
  { id: 'html',  name: 'HTML / CSS', category: 'Frontend',  iconUrl: `${cdn}/html5/html5-original.svg`,           proficiency: 85 },
  { id: 'swift', name: 'Swift',      category: 'Mobile',    iconUrl: `${cdn}/swift/swift-original.svg`,           proficiency: 75 },
  { id: 'ble',   name: 'BLE',        category: 'Embedded',  iconUrl: `${cdn}/raspberrypi/raspberrypi-original.svg`, proficiency: 70 },
  { id: 'git',   name: 'Git',        category: 'Tools',     iconUrl: `${cdn}/git/git-original.svg`,               proficiency: 85 },
];
