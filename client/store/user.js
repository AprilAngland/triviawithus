import axios from 'axios'
import history from '../history'
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const defaultUser = {}

const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

const UPDATE_INFO = 'UPDATE_INFO'
const updatedInfo = info => ({
  type: UPDATE_INFO,
  info
})

export const updateInfo = (info, id) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${id}`, info)
    // console.log(data)
    dispatch(updatedInfo(data))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_INFO:
      return {...action.info}
    default:
      return state
  }
}
