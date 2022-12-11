const express = require('express');

const router = express.Router();

const assetsController = require('../controllers/assets/assets.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware.selectUser('USER'), assetsController.getAssets);

module.exports = router;
