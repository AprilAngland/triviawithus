const Sequelize = require('sequelize')
const db = require('../db')

const TriviaMultiChoicerVote = db.define('triviamultichoicervote', {
  ans: {
    type: Sequelize.STRING
  },
  correct: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = TriviaMultiChoicerVote
