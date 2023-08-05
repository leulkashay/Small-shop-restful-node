const getAllProduct = (req, res) => {
    res.status(200).json({
	message: "Get all product"
    });
};

const createProduct = (req, res) => {
    res.status(201).json({
	message: "create product"
    });
};

module.exports = {
    getAllProduct,
    createProduct
};
