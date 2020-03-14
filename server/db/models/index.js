const User = require('./user')
const TriviaHimHer = require('./TriviaHimHer')
const TriviaHimHerVote = require('./TriviaHimHerVote')
const TriviaGuessNumber = require('./TriviaGuessNumber')
const TriviaGuessNumberVote = require('./TriviaGuessNumberVote')
const TriviaMultiChoice = require('./TriviaMultiChoice')
const TriviaMultiChoiceVote = require('./TriviaMultiChoiceVote')
const TriviaTrueFalse = require('./TriviaTrueFalse')
const TriviaTrueFalseVote = require('./TriviaTrueFalseVote')
const Menu = require('./menu')

User.belongsToMany(TriviaHimHer, {through: TriviaHimHerVote})
TriviaHimHer.belongsToMany(User, {through: TriviaHimHerVote})
User.belongsToMany(TriviaTrueFalse, {through: TriviaTrueFalseVote})
TriviaTrueFalse.belongsToMany(User, {through: TriviaTrueFalseVote})
User.belongsToMany(TriviaGuessNumber, {through: TriviaGuessNumberVote})
TriviaGuessNumber.belongsToMany(User, {through: TriviaGuessNumberVote})
User.belongsToMany(TriviaMultiChoice, {through: TriviaMultiChoiceVote})
TriviaMultiChoice.belongsToMany(User, {through: TriviaMultiChoiceVote})
module.exports = {
  User,
  Menu,
  TriviaHimHer,
  TriviaHimHerVote,
  TriviaGuessNumber,
  TriviaGuessNumberVote,
  TriviaMultiChoice,
  TriviaMultiChoiceVote,
  TriviaTrueFalse,
  TriviaTrueFalseVote
}
