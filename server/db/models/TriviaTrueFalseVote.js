const Sequelize = require('sequelize')
const db = require('../db')

const TriviaTrueFalseVote = db.define('triviatruefalsevote', {
  ans: {
    type: Sequelize.STRING
  },
  correct: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = TriviaTrueFalseVote
