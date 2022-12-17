const express = require('express');

const router = express.Router();

const reportsController = require('../controllers/reports/reports.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/reportDashboard', authMiddleware.selectUser('ADMIN'), reportsController.reportDashboard);

router.get('/reportVolumeByDay', authMiddleware.selectUser('ADMIN'), reportsController.reportVolumeByDay);

module.exports = router;
