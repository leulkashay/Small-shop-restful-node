//implement product routes

const express = require('express');
const router = express.Router();

const productController = require('../controller/product');

router.get("/", productController.getAllProduct);

router.post("/", productController.createProduct);

router.patch('/:productId', productController.updateOneProduct);

router.delete('/:productId', productController.deleteOneProduct);

module.exports = router;
