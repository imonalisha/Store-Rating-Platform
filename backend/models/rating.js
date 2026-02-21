const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rating = sequelize.define('Rating', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Requirement: Ratings range from 1 to 5 [cite: 7]
      max: 5
    }
  },
  // We use Foreign Keys to link the user and the store
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // To prevent a user from rating the same store multiple times, 
  // you can add a unique composite index here later.
  timestamps: true
});

module.exports = Rating;