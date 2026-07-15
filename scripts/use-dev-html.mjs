import { copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
copyFileSync(join(root, 'index.dev.html'), join(root, 'index.html'))
