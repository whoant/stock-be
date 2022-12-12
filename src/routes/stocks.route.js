const express = require('express');

const router = express.Router();

const stocksController = require('../controllers/stocks/stocks.controller');

router.post('/', stocksController.createStock);

router.post('/:id/mark_as_disable', stocksController.disableStock);

router.post('/:id/mark_as_enable', stocksController.enableStock);

module.exports = router;
