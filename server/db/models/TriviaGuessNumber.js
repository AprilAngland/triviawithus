const Sequelize = require('sequelize')
const db = require('../db')

const TriviaGuessNumber = db.define('triviaguessnumber', {
  text: {
    type: Sequelize.STRING
  },
  translation: {
    type: Sequelize.STRING
  },
  ans: {
    type: Sequelize.INTEGER
  },
  ansVotes: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: []
  },
  type: {
    type: Sequelize.ENUM(['real', 'dummy']),
    defaultValue: 'real'
  }
})

module.exports = TriviaGuessNumber
