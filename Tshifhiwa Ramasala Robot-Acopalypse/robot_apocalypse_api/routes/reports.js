// controllers/reportsController.js

const Survivor = require('../models/survivorModel');
const calculatePercentage = require('../utils/calculatePercentage');

exports.getReports = async (req, res) => {
  try {
    const allSurvivors = await Survivor.findAll();

    const infectedSurvivors = allSurvivors.filter((survivor) => survivor.infected);
    const nonInfectedSurvivors = allSurvivors.filter((survivor) => !survivor.infected);

    const infectedPercentage = calculatePercentage(infectedSurvivors.length, allSurvivors.length);
    const nonInfectedPercentage = calculatePercentage(nonInfectedSurvivors.length, allSurvivors.length);

    res.status(200).json({
      infectedPercentage,
      nonInfectedPercentage,
      infectedSurvivors,
      nonInfectedSurvivors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
