const express = require('express');

const ctrl = require('../../controllers/products');

const { validateBody } = require('../../middlewares');
const schemas = require('../../schemas/products');

const router = express.Router();

router.get('/', ctrl.listProducts);

router.get('/:id', ctrl.getProductById);

router.post('/', validateBody(schemas.addSchema), ctrl.addProduct);

router.put('/:id', validateBody(schemas.schemaPut), ctrl.updateProduct);

router.delete('/:id', ctrl.removeProduct);

module.exports = router;
