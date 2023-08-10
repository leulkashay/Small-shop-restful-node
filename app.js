const express= require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const productRouter = require('./api/routes/products');
const orderRouter = require('./api/routes/orders');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
	res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT');
    };
    next();
});

app.use('/products', productRouter);
app.use('/orders', orderRouter);


app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
	error: {
	    message: error.message
	}
    });
});

module.exports = app;
