/** Prefix public asset paths with Vite base (needed for GitHub Pages project URLs). */
export function asset(path) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
