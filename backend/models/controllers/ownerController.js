const { Rating, User, sequelize } = require('../models');

exports.getOwnerDashboard = async (req, res) => {
  try {
    const storeId = req.user.storeId; // This comes from the logged-in owner's token

    // 1. Calculate Average Rating
    const avgData = await Rating.findOne({
      where: { storeId },
      attributes: [[sequelize.fn('AVG', sequelize.col('rating_value')), 'averageRating']],
      raw: true
    });

    // 2. Get List of Users who rated the store
    const raters = await Rating.findAll({
      where: { storeId },
      include: [{
        model: User,
        attributes: ['name', 'email'] // Requirement: Show rater details [cite: 59]
      }],
      order: [['createdAt', 'DESC']] // Show most recent ratings first
    });

    res.json({
      averageRating: parseFloat(avgData.averageRating || 0).toFixed(1),
      ratingsCount: raters.length,
      ratersList: raters
    });
  } catch (error) {
    res.status(500).json({ message: "Error loading dashboard" });
  }
};