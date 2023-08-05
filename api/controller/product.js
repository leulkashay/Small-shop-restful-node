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

const updateOneProduct = (req, res) => {
    res.status(200).json({
	message: "product updated"
    });
}
const deleteOneProduct = (req, res) => {
    res.status(200).json({
	message: "Deleted one product"
    });
}

module.exports = {
    getAllProduct,
    createProduct,
    updateOneProduct,
    deleteOneProduct
};
