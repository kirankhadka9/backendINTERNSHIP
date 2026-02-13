const Sale = require('../schema/sale');

exports.generateLeaderboard = async () => {
  return await Sale.aggregate([
    {
      $group: {
        _id: '$agentName',
        totalAmount: { $sum: '$amount' },
        totalDeals: { $sum: '$deals' }
      }
    },
    { $sort: { totalAmount: -1, totalDeals: -1, _id: 1 } }
  ]);
};