import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const defaultQuestion = {}
const GET_QUESTION = 'GET_QUESTION'
const gotQuestion = question => ({type: GET_QUESTION, question})
export const getQuestion = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/triviahimhers/${id}`)
    // data.displayType = 'question'
    dispatch(gotQuestion(data || defaultQuestion))
  } catch (err) {
    console.error(err)
  }
}
// const NEXT_QUESTION = 'NEXT_QUESTION'
// export const nextQuestion = () => ({
//   type: NEXT_QUESTION
// })
const VOTE_QUESTION = 'VOTE_QUESTION'
const votedQuestion = vote => ({
  type: VOTE_QUESTION,
  vote
})

export const voteQuestion = (id, ans, userId) => async dispatch => {
  try {
    const {data} = await axios.put(
      `/api/triviahimhers/${id}?&ans=${ans}&userId=${userId}`
    )
    dispatch(votedQuestion(ans))
  } catch (err) {
    console.error(err)
  }
}

const RESET_QUESTION = 'RESET_QUESTION'
const resetedQuestion = () => ({
  type: RESET_QUESTION
})

export const resetQuestion = () => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/triviahimhers`)
    dispatch(resetedQuestion())
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultQuestion, action) {
  switch (action.type) {
    case GET_QUESTION:
      return action.question
    case VOTE_QUESTION:
      return state
    case RESET_QUESTION:
      return state
    // case NEXT_QUESTION:
    //   console.log('switch next question')
    //   return state
    default:
      return state
  }
}
