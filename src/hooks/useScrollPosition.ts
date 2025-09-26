import { useState, useEffect } from 'react';
import { throttle } from '@/lib/utils';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateScrollPosition = throttle(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, 16); // ~60fps

    window.addEventListener('scroll', updateScrollPosition);
    
    // Set initial position
    updateScrollPosition();

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
}
