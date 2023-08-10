const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Type.ObjectId,
    name: {type: String, require: true},
    quantity: { type: Number, require: true}
});

model.exports  = mongoose.model('Order', orderSchema);
