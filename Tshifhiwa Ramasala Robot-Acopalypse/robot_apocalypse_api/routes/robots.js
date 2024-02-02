// routes/robots.js

const express = require('express');
const router = express.Router();
const robotsController = require('../controllers/robotsController');

// Route to get all robots
router.get('/robots', robotsController.getAllRobots);

module.exports = router;
