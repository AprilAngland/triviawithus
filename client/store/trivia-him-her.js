import axios from 'axios'
import history from '../history'
const defaultQuestion = {
  id: 1,
  text: 'Default Question',
  translation: '',
  ans: 'Her',
  ansCntHim: 0,
  ansCntHer: 1,
  type: 'dummy'
}
/**
 * ACTION TYPES
 */
const defaultState = {curQuestion: {}, winners: []}
const HOST_GET_QUESTION = 'HOST_GET_QUESTION'
const gotQuestion = question => ({type: HOST_GET_QUESTION, question})
export const getQuestion = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/triviahimhers/${id}`)

    dispatch(gotQuestion(data || defaultQuestion))
  } catch (err) {
    console.error(err)
  }
}

const HOST_RECORD_QUESTION = 'HOST_RECORD_QUESTION'
const hostRecordedQuestion = question => ({
  type: HOST_RECORD_QUESTION,
  question
})

export const hostRecordQuestion = (
  user
  // questionId,
  // ans,
  // userId
) => async dispatch => {
  try {
    const {data} = await axios.put(
      `/api/triviahimhers/${user.questionId}?&ans=${user.ans}&userId=${user.id}`
    )
    dispatch(hostRecordedQuestion(data))
  } catch (err) {
    console.error(err)
  }
}

const HOST_RESET_QUESTION = 'HOST_RESET_QUESTION'
const resetedQuestion = () => ({
  type: HOST_RESET_QUESTION
})

export const resetQuestion = () => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/triviahimhers`)
    dispatch(resetedQuestion())
  } catch (err) {
    console.error(err)
  }
}

const HOST_GET_WINNER = 'HOST_GET_WINNER'
const gotWinner = winners => ({
  type: HOST_GET_WINNER,
  winners
})

export const getWinner = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/triviahimhers/winner`)
    dispatch(gotWinner(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case HOST_GET_QUESTION:
      return {...state, curQuestion: action.question}
    case HOST_RECORD_QUESTION:
      return {...state, curQuestion: action.question}
    case HOST_RESET_QUESTION:
      return {...defaultState}
    case HOST_GET_WINNER:
      return {...state, winners: action.winners}
    default:
      return state
  }
}
