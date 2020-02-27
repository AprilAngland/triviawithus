import axios from 'axios'
import history from '../history'

const SET_QUESTION = 'SET_QUESTION'
export const setDisplayedQuestion = question => ({
  type: SET_QUESTION,
  question
})
export default function(state = {}, action) {
  switch (action.type) {
    case SET_QUESTION:
      return {...state, question: action.question}
    default:
      return state
  }
}
