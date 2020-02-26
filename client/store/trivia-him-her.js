import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_QUESTION = 'GET_QUESTION'

/**
 * INITIAL STATE
 */
const defaultQuestion = {}

/**
 * ACTION CREATORS
 */
const gotQuestion = question => ({type: GET_QUESTION, question})

/**
 * THUNK CREATORS
 */
export const getQuestion = idx => async dispatch => {
  try {
    const {data} = await axios.get(`/api/triviahimhers/${idx}`)
    // console.log(data)
    dispatch(gotQuestion(data || defaultQuestion))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultQuestion, action) {
  switch (action.type) {
    case GET_QUESTION:
      return action.question
    default:
      return state
  }
}
