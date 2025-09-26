// Constants for the Dashain Festival website

export const SITE_CONFIG = {
  name: 'Dashain Festival',
  title: 'Dashain Festival - The Greatest Festival of Nepal',
  description: 'Celebrate Dashain 2081, Nepal\'s greatest festival of victory and family reunion. Experience the rich traditions, culture, and heritage of this sacred festival.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dashain-festival.vercel.app',
  ogImage: '/images/photo1.jpg',
  author: 'Dashain Festival Website',
  keywords: 'Dashain, Nepal, Festival, Culture, Tradition, Tika, Jamara, Durga, Victory, Family, Celebration',
  themeColor: '#DC143C',
};

export const DASHAIN_DAYS = [
  {
    id: 'ghatasthapana',
    name: 'Ghatasthapana',
    nepali: 'घटस्थापना',
    day: 1,
    description: 'The beginning of Dashain with the sowing of barley seeds',
    significance: 'Marks the start of the 10-day festival'
  },
  {
    id: 'phulpati',
    name: 'Phulpati',
    nepali: 'फुलपाती',
    day: 7,
    description: 'The day when sacred plants and flowers are brought',
    significance: 'Royal procession from Gorkha to Kathmandu'
  },
  {
    id: 'maha-astami',
    name: 'Maha Astami',
    nepali: 'महा अष्टमी',
    day: 8,
    description: 'The day of goddess worship with animal sacrifices',
    significance: 'Kaal Ratri - the fiercest form of Durga'
  },
  {
    id: 'maha-navami',
    name: 'Maha Navami',
    nepali: 'महा नवमी',
    day: 9,
    description: 'The final day of Navaratri with grand celebrations',
    significance: 'Victory of good over evil is celebrated'
  },
  {
    id: 'vijaya-dashami',
    name: 'Vijaya Dashami',
    nepali: 'विजया दशमी',
    day: 10,
    description: 'The main day with Tika and Jamara from elders',
    significance: 'The most important day of Dashain'
  }
];

export const TRADITIONS = [
  {
    id: 'tika-jamara',
    title: 'Tika and Jamara',
    description: 'Receiving blessings with red tika and fresh jamara from elders',
    significance: 'Symbolizes protection, prosperity, and good health'
  },
  {
    id: 'family-reunion',
    title: 'Family Reunion',
    description: 'Families gather from all over to celebrate together',
    significance: 'Strengthens family bonds and cultural continuity'
  },
  {
    id: 'kite-flying',
    title: 'Kite Flying',
    description: 'Children and adults fly colorful kites in the clear autumn sky',
    significance: 'Celebrates the victory of good over evil reaching the heavens'
  },
  {
    id: 'bamboo-swings',
    title: 'Bamboo Swings (Ping)',
    description: 'Traditional swings made from bamboo for community enjoyment',
    significance: 'Brings joy and community spirit during the festival'
  }
];

export const NAVIGATION_LINKS = [
  { href: '#about', label: 'About Dashain' },
  { href: '#traditions', label: 'Traditions' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#wishes', label: 'Wishes' },
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/dashain-festival',
  twitter: 'https://twitter.com/dashain-festival',
  instagram: 'https://instagram.com/dashain-festival',
  youtube: 'https://youtube.com/dashain-festival',
};

export const COLORS = {
  primary: '#DC143C',
  secondary: '#FFD700',
  accent: '#FF6B35',
  success: '#28A745',
  warning: '#FFC107',
  danger: '#DC3545',
  info: '#17A2B8',
  light: '#F8F9FA',
  dark: '#343A40',
  white: '#FFFFFF',
  black: '#000000',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
