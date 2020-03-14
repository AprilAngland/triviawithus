const Sequelize = require('sequelize')
const db = require('../db')

const TriviaGuessNumberVote = db.define('triviaguessnumbervote', {
  ans: {
    type: Sequelize.INTEGER
  },
  correct: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = TriviaGuessNumberVote
