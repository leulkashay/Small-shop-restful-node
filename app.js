const express= require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req,res,next) => {
    res.status(200).json({
	message: "app test"
    });
});

module.exports = app;
