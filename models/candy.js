const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Candy = sequelize.define('candy', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    autoNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,

  description: {
    type: Sequelize.STRING,
    autoNull: false
  },

  price: {
    type: Sequelize.DOUBLE,
    autoNull: false
  },

  quantity: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoNull: false,
    
  }
});

module.exports = Candy;