const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(5);
const avatar = Joi.string().uri();
const isBlocked = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  avatar: avatar.required(),
  isBlocked: isBlocked.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  avatar: avatar,
  isBlocked: isBlocked,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
