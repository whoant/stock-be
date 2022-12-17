const express = require('express');

const router = express.Router();

const internalUsersController = require('../controllers/internalUsers/internalUsers.controller');

router.post('/login', internalUsersController.login);

router.post('/create', internalUsersController.createNewInternalUser);

module.exports = router;
