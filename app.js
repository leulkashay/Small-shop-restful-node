const express= require('express');
const morgan = require('morgan');

const app = express();

const productRouter = require('./api/routes/products');
const orderRouter = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productRouter);
app.use('/orders', orderRouter);


app.use((req,res,next) => {
    res.status(200).json({
	message: "app test"
    });
});

module.exports = app;
