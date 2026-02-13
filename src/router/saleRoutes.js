const express = require('express');
const router = express.Router();
const { createSale, getLeaderboard } = require('../controller/saleController.js');

router.post('/sales', createSale);
router.get('/leaderboard', getLeaderboard);

module.exports = router;
