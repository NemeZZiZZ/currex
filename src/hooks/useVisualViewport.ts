import { useEffect } from 'react';

/**
 * Hook for correct behavior with the virtual keyboard in PWAs.
 * Uses the Visual Viewport API to track the real visible area.
 * Fixes: https://stackoverflow.com/questions/51734463
 */
export function useVisualViewport() {
  useEffect(() => {
    if (!window.visualViewport) {
      console.warn('Visual Viewport API not supported');
      return;
    }

    const updateViewportHeight = () => {
      const vh = window.visualViewport!.height;
      document.documentElement.style.setProperty('--viewport-height', `${vh}px`);
      const vhUnit = vh * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhUnit}px`);
    };

    updateViewportHeight();

    window.visualViewport.addEventListener('resize', updateViewportHeight);
    window.visualViewport.addEventListener('scroll', updateViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener('resize', updateViewportHeight);
      window.visualViewport?.removeEventListener('scroll', updateViewportHeight);
    };
  }, []);
}
