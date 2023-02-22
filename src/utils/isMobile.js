export default function isMobile() {
  const user = navigator.userAgent;

  if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
    return true;
  }
  return false;
}
