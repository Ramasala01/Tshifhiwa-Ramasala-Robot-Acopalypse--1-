// routes/survivors.js

const express = require('express');
const router = express.Router();
const survivorsController = require('../controllers/survivorsController');

// Route to get all survivors
router.get('/survivors', survivorsController.getAllSurvivors);

// Route to get a specific survivor by ID
router.get('/survivors/:id', survivorsController.getSurvivorById);

// Route to create a new survivor
router.post('/survivors', survivorsController.createSurvivor);

// Route to update a survivor by ID
router.put('/survivors/:id', survivorsController.updateSurvivorById);

// Route to delete a survivor by ID
router.delete('/survivors/:id', survivorsController.deleteSurvivorById);

module.exports = router;
