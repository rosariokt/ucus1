
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  // Use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      // Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )

      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template)

      // Load the server entry module
      const { render } = await vite.ssrLoadModule('/src/server-entry.js')

      // Render the app to HTML
      const { html: appHtml, preloadedState } = await render(url)

      // Inject app-rendered HTML into the template
      const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
        .replace('<!--preloadedState-->', `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>`)

      // Send the rendered HTML back to the client
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // If an error occurs, let Vite fix the stack trace
      vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
  })
}

createServer()
