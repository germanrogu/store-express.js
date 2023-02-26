const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = Number(size) || 10;

  const productCreator = () => ({
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    avatar: faker.image.imageUrl(),
  });
  const products = new Array(limit).fill(null).map(() => productCreator());
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    name: 'Producto 1',
    price: 2000,
    id,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Created',
    data: body,
  });
});

module.exports = router;
