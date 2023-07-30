const exports = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        massage: 'Handiling GET requests to /products'
    });
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        massage: 'Handiling POST requests to /products'
    });
});

module.exports = router;