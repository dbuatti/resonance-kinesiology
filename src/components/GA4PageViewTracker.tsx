import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics 4 Page View Tracking for SPA
 * Tracks page views on route changes in the React app
 */
export const GA4PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    
    // Skip if no measurement ID or placeholder
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      return;
    }

    // Ensure gtag is available
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}