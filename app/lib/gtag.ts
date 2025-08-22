export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

if (!GA_TRACKING_ID) {
  console.warn('Google Analytics Tracking ID is not set in environment variables.');
}

type GtagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
