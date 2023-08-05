const getAllOrder = (req, res) => {
    res.status(200).json({
	message: "Get All order"
    });
};
const createOrder = (req, res) => {
    res.status(201).json({
	message: "Create order"
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
