const User = require('./user');
const Store = require('./store');
const Rating = require('./rating');

// 1. A User can submit many ratings [cite: 53]
User.hasMany(Rating, { foreignKey: 'userId', onDelete: 'CASCADE' });
Rating.belongsTo(User, { foreignKey: 'userId' });

// 2. A Store can have many ratings [cite: 6]
Store.hasMany(Rating, { foreignKey: 'storeId', onDelete: 'CASCADE' });
Rating.belongsTo(Store, { foreignKey: 'storeId' });

// 3. Export all models so they can be used throughout the app
module.exports = {
  user,
  store,
  rating
};