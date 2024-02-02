// controllers/robotsController.js

const axios = require('axios');

// Function to get all robots from the Robot CPU system
const getAllRobots = async (req, res) => {
  try {
    const robotResponse = await axios.get('https://robotstakeover20210903110417.azurewebsites.net/robotcpu');
    const robots = robotResponse.data;

     //grouping robots by category (Flying and Land)
    const flyingRobots = robots.filter(robot => robot.category === 'Flying');
    const landRobots = robots.filter(robot => robot.category === 'Land');

    res.json({
      flyingRobots,
      landRobots,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllRobots,
};
