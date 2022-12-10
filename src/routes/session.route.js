const express = require('express');

const router = express.Router();

const sessionController = require('../controllers/session/session.controller');

router.post('/login', sessionController.login);

module.exports = router;
