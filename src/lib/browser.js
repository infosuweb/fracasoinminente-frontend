/** True inside Instagram / Facebook / Messenger in-app browsers. */
export function isSocialInAppBrowser(userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '') {
  return /Instagram|FBAN|FBAV|FBIOS|Messenger/i.test(userAgent)
}

/**
 * SVG mask + foreignObject video fill is unreliable in social WebViews.
 * Prefer the ink-only title there.
 */
export function canUseMaskedVideoFill() {
  if (typeof navigator === 'undefined') return true
  if (isSocialInAppBrowser()) return false
  return true
}
