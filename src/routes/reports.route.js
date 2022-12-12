const express = require('express');

const router = express.Router();

const reportsController = require('../controllers/reports/reports.controller');

router.get('/reportDashboard', reportsController.reportDashboard);

router.get('/reportVolumeByDay', reportsController.reportVolumeByDay);

module.exports = router;
