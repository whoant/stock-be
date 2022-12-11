const express = require('express');

const router = express.Router();

const sessionsController = require('../controllers/sessions/sessions.controller');

router.get('/currentReport', sessionsController.getCurrentReport);

module.exports = router;
