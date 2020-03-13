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

const RESUME_QUESTION = 'RESUME_QUESTION'
export const resumeDisplayedQuestion = question => ({
  type: RESUME_QUESTION,
  question
})

const SUSPEND_QUESTION = 'SUSPEND_QUESTION'
export const suspendDisplayedQuestion = question => ({
  type: SUSPEND_QUESTION,
  question
})

const initialState = {question: {}, finished: [], status: 'paused'}
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTION:
      return {...state, question: action.question}
    case FINISH_QUESTION:
      return {...state, finished: [...state.finished, action.question]}
    case ERASE_QUESTIONS:
      return initialState
    case SUSPEND_QUESTION:
      return {...state, status: 'paused'}
    case RESUME_QUESTION:
      return {...state, status: 'playing'}
    default:
      return state
  }
}
