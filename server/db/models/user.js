const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  },
  language: {
    type: Sequelize.ENUM(['EN', 'CN']),
    defaultValue: 'EN'
  },
  nickname: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.ENUM(['admin', 'guest']),
    defaultValue: 'guest'
  },
  entreechoice: {
    type: Sequelize.ENUM(['lamb', 'sea bass', 'risotto', 'not sure']),
    defaultValue: 'not sure'
  },
  expectedcount: {
    type: Sequelize.INTEGER
  },
  notetohost: {
    type: Sequelize.STRING
  },
  notetochef: {
    type: Sequelize.STRING
  }
})

module.exports = User
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
