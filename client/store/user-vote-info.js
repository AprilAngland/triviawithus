import axios from 'axios'
import history from '../history'

const ERASE_QUESTIONS = 'ERASE_QUESTIONS'
export const eraseDisplayedQuestions = () => ({
  type: ERASE_QUESTIONS
})

const SET_QUESTION = 'SET_QUESTION'
export const setDisplayedQuestion = question => ({
  type: SET_QUESTION,
  question
})

const FINISH_QUESTION = 'FINISH_QUESTION'
export const finishedDisplayedQuestion = question => ({
  type: FINISH_QUESTION,
  question
})
const initialState = {question: {}, finished: []}
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTION:
      return {...state, question: action.question}
    case FINISH_QUESTION:
      return {...state, finished: [...state.finished, action.question]}
    case ERASE_QUESTIONS:
      return initialState
    default:
      return state
  }
}
