const Sequelize = require('sequelize')
const db = require('../db')

const TriviaHimHerVote = db.define('triviahimhervote', {
  ans: {
    type: Sequelize.STRING
  },
  correct: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = TriviaHimHerVote
