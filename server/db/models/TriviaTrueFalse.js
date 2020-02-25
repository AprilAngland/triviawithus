const Sequelize = require('sequelize')
const db = require('../db')

const TriviaTrueFalse = db.define('triviatruefalse', {
  text: {
    type: Sequelize.STRING
  },
  translation: {
    type: Sequelize.STRING
  },
  ans: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.ENUM(['real', 'dummy']),
    defaultValue: 'real'
  }
})

module.exports = TriviaTrueFalse
