/** True inside Instagram / Facebook / Messenger in-app browsers. */
export function isSocialInAppBrowser(
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '',
) {
  return /Instagram|FBAN|FBAV|FBIOS|Messenger/i.test(userAgent)
}

function isNarrowViewport() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(max-width: 760px)').matches
}

function isAppleMobile(
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '',
) {
  return /iPhone|iPad|iPod/i.test(userAgent)
}

/**
 * SVG mask + foreignObject video fill overflows and paints a black plate
 * on iOS Chrome/Safari and social WebViews. Keep it desktop-only.
 */
export function canUseMaskedVideoFill() {
  if (typeof window === 'undefined') return false
  if (isSocialInAppBrowser()) return false
  if (isAppleMobile()) return false
  if (isNarrowViewport()) return false
  return true
}
