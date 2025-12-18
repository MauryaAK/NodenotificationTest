export const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const isPWA = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  (window.navigator as any).standalone === true;
