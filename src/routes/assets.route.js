const express = require('express');

const router = express.Router();

const assetsController = require('../controllers/assets/assets.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware.selectUser('USER'), assetsController.getAssets);

router.post('/deposit', authMiddleware.selectUser('USER'), assetsController.depositAsset);

router.post('/withdraw', authMiddleware.selectUser('USER'), assetsController.withdrawAsset);

module.exports = router;
