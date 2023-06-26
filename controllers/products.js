const products = require('../models/products');

const { HttpError, ctrlWrapper } = require('../helpers');

const listProducts = async (req, res) => {
  const result = await products.listProducts();
  res.json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await products.getProductById(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addProduct = async (req, res) => {
  const { title, prices } = req.body;
  const result = await products.addProduct({ title, prices });
  res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;

  const result = await products.updateProduct(id, req.body);

  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.status(201).json(result);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const result = await products.removeProduct(id);
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
