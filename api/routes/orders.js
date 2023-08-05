//implement product routes
const express = require('express');
const router = express.Router();

const orderController = require('../controller/order');

router.get("/", orderController.getAllOrder);

router.post("/", orderController.createOrder);

module.exports = router;
