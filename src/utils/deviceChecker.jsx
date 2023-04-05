export function isTablet() {
  const { userAgent, maxTouchPoints } = navigator;
  const tablets = ['iPad', 'tablet', 'Tablet', 'Kindle', 'Tab', 'Galaxy Tab'];
  const isMacintosh = /Macintosh/.test(userAgent);

  if (isMacintosh && maxTouchPoints) {
    return true;
  }
  return tablets.some(tablet => userAgent.includes(tablet));
}

export function isMobile() {
  const { userAgent } = navigator;
  const phones = ['Android', 'webOS', 'iPhone', 'iPod', 'BlackBerry', 'IEMobile', 'Opera Mini', 'Mobi', 'mobi'];

  if (isTablet()) {
    return false;
  }
  return phones.some(phone => userAgent.includes(phone));
}

export function isDesktop() {
  return !isMobile() && !isTablet();
}
