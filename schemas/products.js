const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().required(),
  prices: Joi.string().required(),
});

const schemaPut = Joi.object({
  title: Joi.string().optional(),
  prices: Joi.string().optional(),
});

module.exports = {
  addSchema,
  schemaPut,
};
