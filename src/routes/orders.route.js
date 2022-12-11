const express = require('express');

const router = express.Router();

const ordersController = require('../controllers/orders/orders.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', ordersController.getOrders);

router.get('/getLatestOrders', ordersController.getLatestOrders);

router.post('/', authMiddleware.selectUser('USER'), ordersController.createOrder);

router.get('/enabled', authMiddleware.selectUser('USER'), ordersController.getEnabledOrders);

router.get('/history', authMiddleware.selectUser('USER'), ordersController.getHistoryOrders);

router.get('/historyMatched', ordersController.getHistoryMatchingOrders);

module.exports = router;
