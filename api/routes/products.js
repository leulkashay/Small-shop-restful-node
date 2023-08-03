//implement product routes
const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
	message: "Handling GET request"
    });
});

router.post("/", (req, res, next) => {
    res.status(201).json({
	message: "Handling POST reques"
    });
});

module.exports = router;
