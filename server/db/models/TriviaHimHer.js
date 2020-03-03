const Sequelize = require('sequelize')
const db = require('../db')

const TriviaHimHer = db.define('triviahimher', {
  text: {
    type: Sequelize.STRING
  },
  translation: {
    type: Sequelize.STRING
  },
  ans: {
    type: Sequelize.STRING
  },
  ansCntHim: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  ansCntHer: {
    type: Sequelize.STRING,
    defaultValue: 0
  },
  type: {
    type: Sequelize.ENUM(['real', 'dummy']),
    defaultValue: 'real'
  }
})

module.exports = TriviaHimHer
