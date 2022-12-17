const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users/users.controller');

router.get('/', usersController.getUsers);

module.exports = router;
