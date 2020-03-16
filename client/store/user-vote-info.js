import axios from 'axios'
import history from '../history'

const GET_SETUP = 'GET_SETUP'
const gotSetup = setup => ({type: GET_SETUP, setup})

export const getSetup = setup => async dispatch => {
  try {
    const {data} = await axios.get(`/api/setups`)
    dispatch(gotSetup(data))
  } catch (err) {
    console.error(err)
  }
}

const GUEST_ERASE_QUESTIONS = 'GUEST_ERASE_QUESTIONS'
export const eraseDisplayedQuestions = () => ({
  type: GUEST_ERASE_QUESTIONS
})

const GUEST_SET_QUESTION = 'GUEST_SET_QUESTION'
export const setDisplayedQuestion = question => ({
  type: GUEST_SET_QUESTION,
  question
})

const GUEST_RESUME_QUESTION = 'GUEST_RESUME_QUESTION'
export const resumeDisplayedQuestion = question => ({
  type: GUEST_RESUME_QUESTION,
  question
})

const GUEST_SUSPEND_QUESTION = 'GUEST_SUSPEND_QUESTION'
export const suspendDisplayedQuestion = question => ({
  type: GUEST_SUSPEND_QUESTION,
  question
})

const initialState = {question: {}, status: 'paused'}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SETUP:
      return {...state, question: action.setup}
    case GUEST_SET_QUESTION:
      return {...state, question: action.question}
    case GUEST_ERASE_QUESTIONS:
      return initialState
    case GUEST_SUSPEND_QUESTION:
      return {...state, status: 'paused'}
    case GUEST_RESUME_QUESTION:
      return {...state, status: 'playing'}
    default:
      return state
  }
}
