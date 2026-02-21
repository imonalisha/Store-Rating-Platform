const { Store, Rating } = require('../models');
const { Op } = require('sequelize');

// Search for stores by Name and Address 
exports.getAllStores = async (req, res) => {
  const { search } = req.query;
  try {
    const stores = await Store.findAll({
      where: search ? {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { address: { [Op.like]: `%${search}%` } }
        ]
      } : {},
      order: [['name', 'ASC']] // PDF Requirement: Support sorting [cite: 69]
    });
    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stores" });
  }
};

// Submit or Modify a rating (1 to 5) [cite: 51, 52, 53]
exports.rateStore = async (req, res) => {
  const { storeId, rating_value } = req.body;
  const userId = req.user.id;

  try {
    // PDF Requirement: Ratings must be 1 to 5 [cite: 7]
    if (rating_value < 1 || rating_value > 5) {
      return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }

    const [rating, created] = await Rating.findOrCreate({
      where: { userId, storeId },
      defaults: { rating_value }
    });

    if (!created) {
      rating.rating_value = rating_value; // Modify existing rating [cite: 52]
      await rating.save();
    }

    res.json({ message: "Rating submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting rating" });
  }
};