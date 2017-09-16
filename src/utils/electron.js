export function isNative () {
  return (
    (process && process.versions && process.versions.electron) ||
    (window && window.navigator.userAgent.includes('Electron'))
  )
}
