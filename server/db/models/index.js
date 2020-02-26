const User = require('./user')
const TriviaHimHer = require('./TriviaHimHer')
const TriviaGuessNumber = require('./TriviaGuessNumber')
const TriviaMultiChoice = require('./TriviaMultiChoice')
const TriviaTrueFalse = require('./TriviaTrueFalse')
const Menu = require('./menu')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(TriviaHimHer, {through: 'TriviaHimHerVotes'})
TriviaHimHer.belongsToMany(User, {through: 'TriviaHimHerVotes'})
User.belongsToMany(TriviaTrueFalse, {through: 'TriviaTrueFalseVotes'})
TriviaTrueFalse.belongsToMany(User, {through: 'TriviaTrueFalseVotes'})
User.belongsToMany(TriviaGuessNumber, {through: 'TriviaGuessNumberVotes'})
TriviaGuessNumber.belongsToMany(User, {through: 'TriviaGuessNumberVotes'})
User.belongsToMany(TriviaMultiChoice, {through: 'TriviaMultiChoiceVotes'})
TriviaMultiChoice.belongsToMany(User, {through: 'TriviaMultiChoiceVotes'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Menu,
  TriviaHimHer,
  TriviaGuessNumber,
  TriviaMultiChoice,
  TriviaTrueFalse
}
