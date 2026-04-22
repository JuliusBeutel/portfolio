import type { Skill } from '../types';

const cdn = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const skills: Skill[] = [
  { id: 'js',    name: 'JavaScript', category: 'Frontend',  iconUrl: `${cdn}/javascript/javascript-original.svg` },
  { id: 'ts',    name: 'TypeScript', category: 'Frontend',  iconUrl: `${cdn}/typescript/typescript-original.svg` },
  { id: 'react', name: 'React',      category: 'Frontend',  iconUrl: `${cdn}/react/react-original.svg` },
  { id: 'html',  name: 'HTML / CSS', category: 'Frontend',  iconUrl: `${cdn}/html5/html5-original.svg` },
  { id: 'swift', name: 'Swift',      category: 'Mobile',    iconUrl: `${cdn}/swift/swift-original.svg` },
  { id: 'ble',   name: 'BLE',        category: 'Embedded',  iconUrl: `${cdn}/raspberrypi/raspberrypi-original.svg` },
  { id: 'git',   name: 'Git',        category: 'Tools',     iconUrl: `${cdn}/git/git-original.svg` },
];
