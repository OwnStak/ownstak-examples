import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '0.0.0.0';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from my Hono app!')
})

serve({
  fetch: app.fetch,
  port: PORT,
  hostname: HOST,
}, () => {
  console.debug(`Hono server running at http://${HOST}:${PORT}`)
})

