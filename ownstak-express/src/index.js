import express from 'express';

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello from my Express app!');
});

app.listen(PORT, HOST, () => {
  console.debug(`Express server is running on http://${HOST}:${PORT}`);
});
