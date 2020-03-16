const Sequelize = require('sequelize')
const db = require('../db')

const Setup = db.define('setup', {
  curQuestion: {
    type: Sequelize.STRING
  }
})

module.exports = Setup
