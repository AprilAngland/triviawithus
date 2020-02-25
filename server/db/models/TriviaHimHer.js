const Sequelize = require('sequelize')
const db = require('../db')

const TriviaHimHer = db.define('triviahimher', {
  text: {
    type: Sequelize.STRING
  },
  //CREATE DATABASE wedding_bilingual WITH ENCODING 'UTF8' LC_COLLATE='zh_CN' LC_CTYPE='zh_CN' TEMPLATE=template0;
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

module.exports = TriviaHimHer
