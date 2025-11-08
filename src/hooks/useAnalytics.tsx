import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics Events Interface
 */
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

/**
 * Custom Analytics Hook
 * Tracks pageviews and custom events
 * Ready for Google Analytics, Plausible, or any analytics service
 */
export function useAnalytics() {
  const location = useLocation();

  // Track pageviews on route change
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  /**
   * Track page view
   */
  const trackPageView = useCallback((path: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: path,
          page_title: document.title,
        });
      }

      // Plausible Analytics
      if (window.plausible) {
        window.plausible('pageview');
      }

      // Console log in development
      if (import.meta.env.DEV) {
        console.log('[Analytics] Page View:', path);
      }
    }
  }, []);

  /**
   * Track custom event
   */
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }

      // Plausible Analytics
      if (window.plausible) {
        window.plausible(event.action, {
          props: {
            category: event.category,
            label: event.label,
            value: event.value,
          },
        });
      }

      // Console log in development
      if (import.meta.env.DEV) {
        console.log('[Analytics] Event:', event);
      }
    }
  }, []);

  /**
   * Track CTA clicks
   */
  const trackCTA = useCallback((ctaName: string, location: string) => {
    trackEvent({
      category: 'CTA',
      action: 'click',
      label: `${ctaName} - ${location}`,
    });
  }, [trackEvent]);

  /**
   * Track navigation clicks
   */
  const trackNavigation = useCallback((linkName: string) => {
    trackEvent({
      category: 'Navigation',
      action: 'click',
      label: linkName,
    });
  }, [trackEvent]);

  /**
   * Track feature usage
   */
  const trackFeature = useCallback((featureName: string, action: string) => {
    trackEvent({
      category: 'Feature',
      action,
      label: featureName,
    });
  }, [trackEvent]);

  return {
    trackPageView,
    trackEvent,
    trackCTA,
    trackNavigation,
    trackFeature,
  };
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
  }
}
