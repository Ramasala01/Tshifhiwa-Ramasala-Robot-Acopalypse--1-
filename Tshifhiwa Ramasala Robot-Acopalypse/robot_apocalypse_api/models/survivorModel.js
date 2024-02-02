// models/survivorModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Survivor = sequelize.define('Survivor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  lastLocation: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  inventory: {
    type: DataTypes.JSON,
    defaultValue: {
      water: 0,
      food: 0,
      medication: 0,
      ammunition: 0,
    },
  },
  infected: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Survivor;
