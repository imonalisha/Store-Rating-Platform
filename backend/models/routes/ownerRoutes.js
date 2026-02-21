const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');
const authorize = require('../middleware/auth'); // Middleware you created earlier

// PDF Requirement: Access functionalities based on roles [cite: 9]
// We protect this route so ONLY Store Owners can see it
router.get('/dashboard', authorize(['Store Owner']), ownerController.getOwnerDashboard);

module.exports = router;