const { Product } = require('../models/product');

const { HttpError, ctrlWrapper } = require('../helpers');

const listProducts = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addProduct = async (req, res) => {
  const result = await Product.create(req.body);
  res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;

  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.status(201).json(result);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.status(200).json({ message: 'Delete success' });
};

module.exports = {
  listProducts: ctrlWrapper(listProducts),
  getProductById: ctrlWrapper(getProductById),
  addProduct: ctrlWrapper(addProduct),
  updateProduct: ctrlWrapper(updateProduct),
  removeProduct: ctrlWrapper(removeProduct),
};
