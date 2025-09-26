// Common types for the Dashain Festival website

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export interface DashainEvent {
  id: string;
  name: string;
  date: string;
  description: string;
  significance: string;
}

export interface TraditionItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  significance: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface WishItem {
  id: string;
  message: string;
  author?: string;
  date: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

// Component props interfaces
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}
