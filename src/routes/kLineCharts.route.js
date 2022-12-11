const express = require('express');

const router = express.Router();

const kLineChartController = require('../controllers/kLineCharts/kLineCharts.controller');

router.get('/', kLineChartController.getCharts);

module.exports = router;
