
const router = require('express').Router();
const orderController = require('../Controller/orderController');

router.post('/create', orderController.createOrder);
router.post('/update', orderController.updateOrder);
router.post('/list', orderController.listOfOrder);
router.post('/search', orderController.getbyId);
router.delete('/delete', orderController.deleteOrder);






module.exports = router;