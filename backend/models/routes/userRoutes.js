const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authorize = require('../middleware/auth');

router.get('/stores', authorize(['Normal User']), userController.getAllStores);
router.post('/rate', authorize(['Normal User']), userController.rateStore);

module.exports = router;