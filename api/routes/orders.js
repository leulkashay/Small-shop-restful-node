const express = require('express');
const router = express.Router();
// Handling Get requists to /odrders
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Order was created'
    });
});
// Handling POST requists to /orders 
router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Order was created'
    });
});

router.get('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});
module.exports = router;