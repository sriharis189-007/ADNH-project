import { cpSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

if (!existsSync(dist)) {
  console.error('dist/ not found. Run vite build first.')
  process.exit(1)
}

const assetsDir = join(root, 'assets')
if (existsSync(assetsDir)) {
  rmSync(assetsDir, { recursive: true, force: true })
}

cpSync(join(dist, 'assets'), assetsDir, { recursive: true })
cpSync(join(dist, 'index.html'), join(root, 'index.html'))

if (existsSync(join(dist, 'favicon.svg'))) {
  cpSync(join(dist, 'favicon.svg'), join(root, 'favicon.svg'))
}

if (existsSync(join(dist, 'images'))) {
  cpSync(join(dist, 'images'), join(root, 'images'), { recursive: true })
}

console.log('Synced production build to repo root for GitHub Pages (main branch).')
