
import { Project } from './types';

// Using raw.githubusercontent.com to fetch images directly from the main branch
const THUMBNAIL_BASE = 'https://raw.githubusercontent.com/rephyrvong-pixel/portfolio/main/thumbnail';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'THE RESONANCE SHELL',
    description: 'A wearable helmet integrating ambient sound capture and bio-sensing.',
    tags: ['Wearable Tech', 'Bio-sensing'],
    link: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/pfl01.pdf',
    videoReference: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/9154finalvideo.mp4',
    category: 'Product Design',
    thumbnail: `${THUMBNAIL_BASE}/pfl01.jpg`
  },
  {
    id: '2',
    title: 'SMART KEY-LOC CAPTCHA',
    description: 'An innovative security authentication interface.',
    tags: ['UI/UX', 'Security'],
    link: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/pfl02.pdf',
    category: 'UI/UX',
    thumbnail: `${THUMBNAIL_BASE}/pfl02.jpg`
  },
  {
    id: '3',
    title: 'Cart-Delivered Power Islands',
    description: 'A mobile energy solution for flexible urban power distribution.',
    tags: ['Product Design', 'Urban Planning'],
    link: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/pfl03.pdf',
    category: 'Product Design',
    thumbnail: `${THUMBNAIL_BASE}/pfl03.jpg`
  },
  {
    id: '4',
    title: 'Design for Retreat of Glaciers in Tibet',
    description: 'Empathy & Intervention strategies for ecological shifts in the Tibetan plateau.',
    tags: ['Environmental Design', 'Research'],
    link: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/pfl04.pdf',
    category: 'Environment',
    thumbnail: `${THUMBNAIL_BASE}/pfl04.jpg`
  },
  {
    id: '5',
    title: 'Accessible Immersive Sightseeing Simulator',
    description: 'A virtual tourism experience designed for inclusivity and accessibility.',
    tags: ['HCI', 'Accessibility', 'VR'],
    link: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/pfl05.pdf',
    category: 'HCI',
    thumbnail: `${THUMBNAIL_BASE}/pfl05.jpg`
  },
  {
    id: '6',
    title: 'SPROUTS GROWING KITS FOR YIRRKALA',
    description: 'A sustainable agricultural kit designed for the Yirrkala community.',
    tags: ['Social Innovation', 'Product Design'],
    link: 'https://github.com/rephyrvong-pixel/portfolio/releases/download/masterportfolio/pfl06.pdf',
    category: 'Social',
    thumbnail: `${THUMBNAIL_BASE}/pfl06.jpg`
  }
];

export const CATEGORIES: string[] = ['All', 'Product Design', 'UI/UX', 'HCI', 'Environment', 'Social'];
