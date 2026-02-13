const Sale = require('../schema/Sale');
const { generateLeaderboard } = require('../services/leaderboardService');


exports.createSale = async (req, res, next) => {
  try {
    const { agentName, amount, deals } = req.body;

    // Validation (optional)
    if (!agentName || !amount || !deals) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const sale = await Sale.create({ agentName, amount, deals });
    res.status(201).json(sale);
  } catch (error) {
    next(error);
  }
};

// Get leaderboard
exports.getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await Sale.aggregate([
      {
        $group: {
          _id: '$agentName',
          totalAmount: { $sum: '$amount' },
          totalDeals: { $sum: '$deals' }
        }
      },
      { $sort: { totalAmount: -1, totalDeals: -1, _id: 1 } }
    ]);
    res.json(leaderboard);
  } catch (err) {
    next(err);
  }
};

