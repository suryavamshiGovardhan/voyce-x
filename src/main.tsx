import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance: Report Web Vitals
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onLCP(onPerfEntry);
      onFCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals not available, skip reporting
    });
  }
};

// Create root and render
const container = document.getElementById("root");
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(<App />);

// Log Web Vitals in development, send to analytics in production
if (import.meta.env.DEV) {
  reportWebVitals(console.log);
} else {
  reportWebVitals((metric) => {
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  });
}

// Declare gtag on window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
