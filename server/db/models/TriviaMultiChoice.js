const Sequelize = require('sequelize')
const db = require('../db')

const TriviaMultiChoice = db.define('triviamultichoice', {
  text: {
    type: Sequelize.STRING
  },
  translation: {
    type: Sequelize.STRING
  },
  text1: {
    type: Sequelize.STRING
  },
  translation1: {
    type: Sequelize.STRING
  },
  text2: {
    type: Sequelize.STRING
  },
  translation2: {
    type: Sequelize.STRING
  },
  text3: {
    type: Sequelize.STRING
  },
  translation3: {
    type: Sequelize.STRING
  },
  ans: {
    type: Sequelize.STRING
  },
  ansCnt1: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  ansCnt2: {
    type: Sequelize.STRING,
    defaultValue: 0
  },
  ansCnt3: {
    type: Sequelize.STRING,
    defaultValue: 0
  },
  type: {
    type: Sequelize.ENUM(['real', 'dummy']),
    defaultValue: 'real'
  }
})

module.exports = TriviaMultiChoice
