const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

// Import Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/adminRoutes');
const ownerRoutes = require('./routes/ownerRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors()); // Allows your React app to talk to this backend
app.use(express.json());

// PDF Requirement: Single login system and role-based access [cite: 8, 9]
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/user', userRoutes);

// Sync Database and Start Server
const PORT = process.env.PORT || 5000;

// Requirement: Best practices for database schema 
sequelize.sync({ alter: true }).then(() => {
  console.log("Database connected and tables updated!");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Database connection failed:", err);
});