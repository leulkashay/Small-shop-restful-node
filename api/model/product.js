const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Type.ObjectId,
    name: { type: string, require: true},
    price: { type: string, require: true}
});

model.exports = mongoose.model('Product', productSchema);
