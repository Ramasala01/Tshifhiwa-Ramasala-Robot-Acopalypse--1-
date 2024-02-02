// controllers/survivorsController.js

const Survivor = require('../models/survivorModel');

const getAllSurvivors = async (req, res) => {
  try {
    const survivors = await Survivor.findAll();
    res.json(survivors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSurvivorById = async (req, res) => {
  const { id } = req.params;
  try {
    const survivor = await Survivor.findByPk(id);
    if (!survivor) {
      res.status(404).json({ message: 'Survivor not found' });
    } else {
      res.json(survivor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createSurvivor = async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const newSurvivor = await Survivor.create({ name, age, gender });
    res.status(201).json(newSurvivor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateSurvivorById = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  try {
    const survivor = await Survivor.findByPk(id);
    if (!survivor) {
      res.status(404).json({ message: 'Survivor not found' });
    } else {
      await survivor.update({ name, age, gender });
      res.status(200).json(survivor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteSurvivorById = async (req, res) => {
  const { id } = req.params;
  try {
    const survivor = await Survivor.findByPk(id);
    if (!survivor) {
      res.status(404).json({ message: 'Survivor not found' });
    } else {
      await survivor.destroy();
      res.status(204).json(); // No content after successful deletion
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllSurvivors,
  getSurvivorById,
  createSurvivor,
  updateSurvivorById,
  deleteSurvivorById,
};
