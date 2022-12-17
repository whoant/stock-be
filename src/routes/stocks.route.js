const express = require('express');

const router = express.Router();

const stocksController = require('../controllers/stocks/stocks.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware.selectUser('ADMIN'), stocksController.createStock);

router.get('/', stocksController.getStocks);

router.post('/:id/mark_as_disable', authMiddleware.selectUser('ADMIN'), stocksController.disableStock);

router.post('/:id/mark_as_enable', authMiddleware.selectUser('ADMIN'), stocksController.enableStock);

module.exports = router;
