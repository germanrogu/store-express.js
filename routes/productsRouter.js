const express = require('express');
const ProductsService = require('../services/productsService');

const router = express.Router();

//Crear una instancia
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/filter', async (req, res) => {
  res.send('Filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    if (product) {
      res.status(201).json(product);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const newProduct = await service.create(req.body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json({
    message: 'Deleted',
    product,
  });
});

module.exports = router;
