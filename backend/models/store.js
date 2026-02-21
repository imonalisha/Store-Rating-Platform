const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Store = sequelize.define('Store', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
    // Note: Admin can sort listings by Name [cite: 33]
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true // Requirement: Standard email validation [cite: 67]
    }
  },
  address: {
    type: DataTypes.STRING(400), // Requirement: Max 400 characters [cite: 64]
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Store;