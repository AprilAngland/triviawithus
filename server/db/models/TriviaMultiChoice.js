const Sequelize = require('sequelize')
const db = require('../db')

const TriviaMultiChoice = db.define('triviamultichoice', {
  text: {
    type: Sequelize.STRING
  },
  //CREATE DATABASE wedding_bilingual WITH ENCODING 'UTF8' LC_COLLATE='zh_CN' LC_CTYPE='zh_CN' TEMPLATE=template0;
  translation: {
    type: Sequelize.STRING
  },
  text1: {
    type: Sequelize.STRING
  },
  //CREATE DATABASE wedding_bilingual WITH ENCODING 'UTF8' LC_COLLATE='zh_CN' LC_CTYPE='zh_CN' TEMPLATE=template0;
  translation1: {
    type: Sequelize.STRING
  },
  text2: {
    type: Sequelize.STRING
  },
  //CREATE DATABASE wedding_bilingual WITH ENCODING 'UTF8' LC_COLLATE='zh_CN' LC_CTYPE='zh_CN' TEMPLATE=template0;
  translation2: {
    type: Sequelize.STRING
  },
  text3: {
    type: Sequelize.STRING
  },
  //CREATE DATABASE wedding_bilingual WITH ENCODING 'UTF8' LC_COLLATE='zh_CN' LC_CTYPE='zh_CN' TEMPLATE=template0;
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
