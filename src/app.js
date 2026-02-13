const express = require('express');
const router = express.Router();
const { createSale, getLeaderboard, deleteSale } = require('../controller/saleController');

// Create a sale
router.post('/sales', createSale);

// Get leaderboard
router.get('/leaderboard', getLeaderboard);


module.exports = router;
