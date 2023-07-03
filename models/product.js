const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: String,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
  title: Joi.string().required(),
  prices: Joi.string().required(),
  desc: Joi.string().required(),
  img: Joi.string().required(),
  restaurant: Joi.string().required(),
});

const schemaPut = Joi.object({
  title: Joi.string().optional(),
  prices: Joi.string().optional(),
  desc: Joi.string().optional(),
  img: Joi.string().optional(),
  restaurant: Joi.string().optional(),
});

const schemas = {
  addSchema,
  schemaPut,
};

const Product = model('product', productSchema); // створюємщ модель

module.exports = {
  schemas,
  Product,
};
