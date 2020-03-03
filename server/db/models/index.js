const User = require('./user')
const TriviaHimHer = require('./TriviaHimHer')
const TriviaGuessNumber = require('./TriviaGuessNumber')
const TriviaMultiChoice = require('./TriviaMultiChoice')
const TriviaTrueFalse = require('./TriviaTrueFalse')
const Menu = require('./menu')

User.belongsToMany(TriviaHimHer, {through: 'TriviaHimHerVotes'})
TriviaHimHer.belongsToMany(User, {through: 'TriviaHimHerVotes'})
User.belongsToMany(TriviaTrueFalse, {through: 'TriviaTrueFalseVotes'})
TriviaTrueFalse.belongsToMany(User, {through: 'TriviaTrueFalseVotes'})
User.belongsToMany(TriviaGuessNumber, {through: 'TriviaGuessNumberVotes'})
TriviaGuessNumber.belongsToMany(User, {through: 'TriviaGuessNumberVotes'})
User.belongsToMany(TriviaMultiChoice, {through: 'TriviaMultiChoiceVotes'})
TriviaMultiChoice.belongsToMany(User, {through: 'TriviaMultiChoiceVotes'})
User.belongsToMany(Menu, {through: 'MenuVotes'})
Menu.belongsToMany(User, {through: 'MenuVotes'})
module.exports = {
  User,
  Menu,
  TriviaHimHer,
  TriviaGuessNumber,
  TriviaMultiChoice,
  TriviaTrueFalse
}
