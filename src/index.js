import express from 'express';
const app = express();

const port = 3000;

app.get('/', (_req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
