import axios from 'axios'
import history from '../history'
const GET_SETUP = 'GET_SETUP'
const SET_SETUP = 'SET_SETUP'
const defaultSetup = {}

const gotSetup = setup => ({type: GET_SETUP, setup})
const setedSetup = setup => ({type: SET_SETUP, setup})

export const getSetup = setup => async dispatch => {
  try {
    const {data} = await axios.get(`/api/setups`)
    dispatch(gotSetup(data))
  } catch (err) {
    console.error(err)
  }
}

export const setSetup = setup => async dispatch => {
  try {
    const {data} = await axios.put(`/api/setups`, setup)
    dispatch(setedSetup(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultSetup, action) {
  switch (action.type) {
    case GET_SETUP:
      return action.setup
    case SET_SETUP:
      return action.setup
    default:
      return state
  }
}
