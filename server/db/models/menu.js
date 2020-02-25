const Sequelize = require('sequelize')
const db = require('../db')

const Menu = db.define('menu', {
  section: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  },
  translation: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }
})

module.exports = Menu
