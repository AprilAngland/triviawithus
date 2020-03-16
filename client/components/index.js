/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as NavbarCustom} from './navbar-custom'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Menu} from './menu'
export {default as Game} from './game'
export {default as TriviaHimHer} from './trivia-him-her'
export {default as TriviaHimHerQuestion} from './trivia-him-her-question'
export {default as TriviaHimHerVote} from './trivia-him-her-vote'
export {default as TriviaHimHerVoteChart} from './trivia-him-her-vote-chart'
export {default as TriviaHimHerWinner} from './trivia-him-her-winner'
export {default as Wait} from './wait'
export {default as Welcome} from './welcome'
export {default as TriviaGuessNumber} from './trivia-guess-number'
export {default as TriviaMultiChoice} from './trivia-multi-choice'
export {default as TriviaTrueFalse} from './trivia-true-false'
