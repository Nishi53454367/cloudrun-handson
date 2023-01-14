import express from 'express';
const app = express();
const port = Number(process.env.PORT) || 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
})

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/shop', (req, res) => {
  res.send('Shop API');
});

app.get('/notices', (req, res) => {
  res.send('Notices API');
});

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});