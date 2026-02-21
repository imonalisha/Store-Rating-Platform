const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Path to your DB connection file

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      // PDF Requirement: Min 20, Max 60 characters [cite: 63]
      len: [20, 60] 
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      // PDF Requirement: Standard email validation [cite: 67]
      isEmail: true 
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // Note: Length validation is usually handled in the Controller or 
    // Joi before hashing, but you can add it here too [cite: 65]
  },
  address: {
    type: DataTypes.STRING(400), // PDF Requirement: Max 400 characters [cite: 64]
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('System Administrator', 'Normal User', 'Store Owner'), // [cite: 12, 13, 14]
    allowNull: false,
    defaultValue: 'Normal User'
  }
}, {
  timestamps: true // Good practice to track when users were created
});

module.exports = User;