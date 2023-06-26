const fs = require('fs/promises');
const { v4 } = require('uuid');

const path = require('path');

const productsPath = path.join(__dirname, 'products.json');

const listProducts = async () => {
  const data = await fs.readFile(productsPath);
  const products = JSON.parse(data);
  return products;
};

const getProductById = async productId => {
  const products = await listProducts();

  const product = products.find(product => product.id === productId.toString());

  if (!product) {
    return null;
  }

  return product;
};

const removeProduct = async productId => {
  const products = await listProducts();

  const index = products.findIndex(
    product => product.id === productId.toString()
  );

  if (index === -1) {
    return null;
  }

  const [removeProduct] = products.splice(index, 1);
  console.log(removeProduct);
  await fs.writeFile(productsPath, JSON.stringify(products));
  return removeProduct;
};

const addProduct = async ({ title, prices }) => {
  const products = await listProducts();
  const newProduct = { title, prices, id: v4() };
  products.push(newProduct);
  await fs.writeFile(productsPath, JSON.stringify(products));
  return newProduct;
};

const updateProduct = async (productId, body) => {
  const products = await listProducts();
  const index = products.findIndex(product => product.id === productId);

  if (index === -1) {
    return null;
  }

  const productUpdate = { ...products[index], ...body };

  //   console.log(productUpdate);

  const productsWithoutProductUpdate = products.filter(
    product => product.id !== productId
  );

  await fs.writeFile(
    productsPath,
    JSON.stringify([...productsWithoutProductUpdate, productUpdate], null, 2)
  );
  return productUpdate;
};

module.exports = {
  listProducts,
  getProductById,
  removeProduct,
  addProduct,
  updateProduct,
};
