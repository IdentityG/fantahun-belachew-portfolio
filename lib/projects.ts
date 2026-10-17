export type ProjectCategory = 'Documentary' | 'Heritage' | 'Events' | 'Sports' | 'Commercial';
export type Project = {
  slug: string;
  number: string;
  name: string;
  short: string;
  category: ProjectCategory;
  descriptor: string;
  client?: string;
  location?: string;
  services: string[];
  role?: string;
  cover: string;
  landscape: string;
  images: string[];
  feature?: boolean;
  sourcePage: string;
};

// Credits and factual project details originate from Fantahun's supplied nine-page portfolio.
// Editorial descriptor lines are website creative copy, not claims of an additional production history.
export const projects: Project[] = [
  {
    slug: 'borana-national-park', number: '01', name: 'Borana National Park', short: 'The land remembers.',
    category: 'Documentary', descriptor: 'A visual journey through the open landscapes and wildlife of Borana.',
    client: 'Borana National Park & Oromia Tourism Office', services: ['Videography', 'Photography'],
    cover: '/images/borana-ostriches.webp', landscape: '/images/borana-ridge.webp',
    images: ['/images/borana-ridge.webp','/images/borana-savannah.webp','/images/borana-ostriches.webp','/images/borana-gazelle.webp','/images/borana-lake.webp'], feature: true, sourcePage: '5'
  },
  {
    slug: 'ethiopian-air-force', number: '02', name: 'Black Lion Air Show', short: 'Above the ordinary.',
    category: 'Commercial', descriptor: 'Aircraft, crews and the spectacle of the Ethiopian Air Force Black Lion Air Show.',
    client: 'Ethiopian Air Force', location: 'Bishoftu, Oromia',
    services: ['Videography', 'Photography', 'Editing', 'Motion Graphics'],
    cover: '/images/airforce-crew.webp', landscape: '/images/airforce-helicopter.webp',
    images: ['/images/airforce-helicopter.webp','/images/airforce-jet.webp','/images/airforce-crew.webp','/images/airforce-jets.webp','/images/airforce-helo-close.webp'], feature: true, sourcePage: '3'
  },
  {
    slug: 'borana-gada-system', number: '03', name: 'The Gada System', short: 'A living legacy.',
    category: 'Documentary', descriptor: 'Portraits from a documentary project exploring the Borana Gada system.',
    client: 'Oromia Tourism Commission', location: 'Borana, Oromia', role: 'Art Director',
    services: ['Videography', 'Photography', 'Editing', 'Motion Graphics'],
    cover: '/images/gada-elder.webp', landscape: '/images/gada-family.webp',
    images: ['/images/gada-elder.webp','/images/gada-family.webp','/images/gada-portrait.webp'], feature: true, sourcePage: '7'
  },
  {
    slug: 'adwa-museum', number: '04', name: 'Adwa Museum', short: 'History, held in light.',
    category: 'Heritage', descriptor: 'Architectural and cultural documentation of the Adwa Museum.',
    client: 'Addis Ababa Mayor Office', services: ['Videography', 'Photography', 'Editing'],
    cover: '/images/adwa-statues.webp', landscape: '/images/adwa-monument.webp',
    images: ['/images/adwa-monument.webp','/images/adwa-statues.webp','/images/adwa-interior.webp','/images/adwa-africa.webp','/images/adwa-auditorium.webp'], feature: true, sourcePage: '2'
  },
  {
    slug: 'bag-show', number: '05', name: 'The Bag Show', short: 'Where fashion meets frame.',
    category: 'Events', descriptor: 'Fashion, textures and moments from a showcase at Sheraton Addis.',
    client: 'Cactus Ethiopia and Felek', location: 'Sheraton Addis', role: 'Art Director',
    services: ['Videography', 'Editing', 'Motion Graphics'],
    cover: '/images/fashion-bag.webp', landscape: '/images/fashion-runway.webp',
    images: ['/images/fashion-bag.webp','/images/fashion-runway.webp','/images/fashion-guests.webp','/images/fashion-wine.webp'], sourcePage: '4'
  },
  {
    slug: 'adama-night-run', number: '06', name: 'Adama Night Run', short: 'The city in motion.',
    category: 'Sports', descriptor: 'Movement, energy and community beneath the evening lights of Adama.',
    client: 'Oromia Tourism Commission & Adama City Administration',
    services: ['Videography', 'Photography'], cover: '/images/adama-runners.webp', landscape: '/images/adama-runners.webp',
    images: ['/images/adama-runners.webp','/images/adama-aerial.webp','/images/adama-crowd.webp','/images/adama-marching.webp'], sourcePage: '6'
  },
  {
    slug: 'book-inauguration', number: '07', name: 'Book Inauguration', short: 'An occasion to remember.',
    category: 'Events', descriptor: 'Scenes from a book inauguration event at the British Council.',
    location: 'British Council',
    services: ['Videography', 'Photography'], cover: '/images/book-gathering.webp', landscape: '/images/book-council.webp',
    images: ['/images/book-council.webp','/images/book-speaker.webp','/images/book-gathering.webp','/images/book-attendees.webp'], sourcePage: '8'
  },
  {
    slug: 'wenchi-great-run', number: '08', name: 'Wenchi Great Run', short: 'Every stride tells a story.',
    category: 'Sports', descriptor: 'Athletes and atmosphere at the Wenchi Great Run.',
    client: 'Oromia Tourism Commission', location: 'Wenchi', role: 'Art Director',
    services: ['Videography', 'Editing', 'Motion Graphics'], cover: '/images/wenchi-athletes.webp', landscape: '/images/wenchi-athletes.webp',
    images: ['/images/wenchi-finish.webp','/images/wenchi-athletes.webp','/images/wenchi-pack.webp','/images/wenchi-runner.webp'], sourcePage: '9'
  }
];
export const featuredProjects = projects.filter((project) => project.feature);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
export const stills = [
  { src: '/images/gada-elder.webp', name: 'Portrait of a tradition', project: 'The Gada System', slug: 'borana-gada-system' },
  { src: '/images/borana-ridge.webp', name: 'Across Borana', project: 'Borana National Park', slug: 'borana-national-park' },
  { src: '/images/airforce-jet.webp', name: 'Into the sky', project: 'Black Lion Air Show', slug: 'ethiopian-air-force' },
  { src: '/images/adwa-statues.webp', name: 'Stories in bronze', project: 'Adwa Museum', slug: 'adwa-museum' },
  { src: '/images/fashion-bag.webp', name: 'The art of detail', project: 'The Bag Show', slug: 'bag-show' },
  { src: '/images/wenchi-athletes.webp', name: 'The pursuit', project: 'Wenchi Great Run', slug: 'wenchi-great-run' },
  { src: '/images/borana-gazelle.webp', name: 'In the wild', project: 'Borana National Park', slug: 'borana-national-park' },
  { src: '/images/adama-runners.webp', name: 'After dark', project: 'Adama Night Run', slug: 'adama-night-run' },
  { src: '/images/gada-family.webp', name: 'Generations', project: 'The Gada System', slug: 'borana-gada-system' },
  { src: '/images/airforce-crew.webp', name: 'The crew', project: 'Black Lion Air Show', slug: 'ethiopian-air-force' },
  { src: '/images/book-gathering.webp', name: 'A gathering', project: 'Book Inauguration', slug: 'book-inauguration' },
  { src: '/images/adwa-africa.webp', name: 'A shared identity', project: 'Adwa Museum', slug: 'adwa-museum' },
];
