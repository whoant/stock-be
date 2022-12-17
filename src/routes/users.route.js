const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users/users.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware.selectUser('ADMIN'), usersController.getUsers);

module.exports = router;
