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
  ansCntTrue: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  ansCntFalse: {
    type: Sequelize.STRING,
    defaultValue: 0
  },
  type: {
    type: Sequelize.ENUM(['real', 'dummy']),
    defaultValue: 'real'
  }
})

module.exports = TriviaTrueFalse
