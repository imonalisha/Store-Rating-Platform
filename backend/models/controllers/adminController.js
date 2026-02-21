const { User, Store, Rating } = require('../models');
const bcrypt = require('bcryptjs');

// 1. Get Dashboard Stats (Requirement: Total users, stores, and ratings)
exports.getAdminStats = async (req, res) => {
  try {
    const userCount = await User.count();
    const storeCount = await Store.count();
    const ratingCount = await Rating.count();
    
    res.json({
      totalUsers: userCount,
      totalStores: storeCount,
      totalRatings: ratingCount
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin stats" });
  }
};

// 2. Add New Store (Requirement: Name, Email, Address)
exports.addStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const newStore = await Store.create({ name, email, address });
    res.status(201).json(newStore);
  } catch (error) {
    res.status(400).json({ message: "Failed to add store. Check email uniqueness." });
  }
};

// 3. Add New User (Requirement: Name, Email, Password, Address, Role)
exports.addUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    
    // Hash password before saving (Best Practice)
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      role
    });
    
    res.status(201).json({ message: "User created successfully", user: newUser.id });
  } catch (error) {
    res.status(400).json({ message: "Failed to add user. Check validations." });
  }
};