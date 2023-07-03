const express = require('express');

const ctrl = require('../../controllers/products');

const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models/product');

const router = express.Router();

router.get('/', ctrl.listProducts);

router.get('/:id', isValidId, ctrl.getProductById);

router.post('/', validateBody(schemas.addSchema), ctrl.addProduct);

router.put(
  '/:id',
  isValidId,
  validateBody(schemas.schemaPut),
  ctrl.updateProduct
);

router.delete('/:id', isValidId, ctrl.removeProduct);

module.exports = router;
