const getAllOrder = (req, res) => {
    res.status(200).json({
	message: "Get All order"
    });
};
const createOrder = (req, res) => {
    const order = {
	productId: req.body.productId,
	quantity: req.body.quantity
    };
    
    res.status(201).json({
	message: "Create order",
	order: order
    });
};

const getOneOrder = (req, res) => {
    res.status(200).json({
	message: "Get one product"
    });
};

const deleteOneOrder = (req, res) => {
    res.status(200).json({
	message: "Deleted one order"
    });
};

module.exports = {
    getAllOrder,
    createOrder,
    getOneOrder,
    deleteOneOrder
};
