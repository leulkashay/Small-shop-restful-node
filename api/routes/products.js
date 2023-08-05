//implement product routes
const express = require('express');
const router = express.Router();

const productController = require('../controller/product');

router.get("/", productController.getAllProduct);

router.post("/", (req, res, next) => {
    res.status(201).json({
	message: "Handling POST reques"
    });
});

module.exports = router;
