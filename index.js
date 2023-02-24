const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/other', (req, res) => {
  res.send('Other route');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
