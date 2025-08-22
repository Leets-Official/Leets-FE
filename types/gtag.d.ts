declare namespace Gtag {
  interface EventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
}

declare interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: Gtag.EventParams | { page_path?: URL; [key: string]: any }
  ) => void;
}
