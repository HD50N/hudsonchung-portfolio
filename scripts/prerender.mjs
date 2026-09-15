// Pre-renders the app into dist/index.html so crawlers and link previews get
// the full page without executing JavaScript. Runs after `vite build`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(resolve(dist, 'server/entry-server.js')).href)

const html = template.replace('<!--app-html-->', render())
writeFileSync(resolve(dist, 'index.html'), html)
rmSync(resolve(dist, 'server'), { recursive: true, force: true })

console.log(`prerendered dist/index.html (${(html.length / 1024).toFixed(1)} kB)`)
