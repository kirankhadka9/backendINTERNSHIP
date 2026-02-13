const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema(
  {
    agentName: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    deals: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Sale', saleSchema);
