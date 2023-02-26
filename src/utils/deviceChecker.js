export function isTablet() {
  const device = navigator.userAgent;
  const tablets = ['iPad', 'tablet', 'Tablet', 'Kindle', 'Tab', 'Galaxy Tab'];

  return tablets.some(tablet => device.includes(tablet));
}

export function isMobile() {
  const { userAgent, maxTouchPoints } = navigator;
  const isMacintosh = /Macintosh/i.test(userAgent);
  const phones = ['Android', 'webOS', 'iPhone', 'iPod', 'BlackBerry', 'IEMobile', 'Opera Mini', 'Mobi', 'mobi'];

  if (isTablet()) {
    return false;
  }
  if (isMacintosh && maxTouchPoints) {
    return false;
  }
  return phones.some(phone => userAgent.includes(phone));
}

export function isDesktop() {
  return !isTablet() && !isMobile();
}
