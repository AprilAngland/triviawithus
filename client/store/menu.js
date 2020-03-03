import axios from 'axios'
import history from '../history'

const GET_MENU = 'GET_MENU'
const gotMenu = menu => ({
  type: GET_MENU,
  menu
})

export const getMenu = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/menus`)
    dispatch(gotMenu(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case GET_MENU:
      return {...state, menuAll: action.menu}
    default:
      return state
  }
}
