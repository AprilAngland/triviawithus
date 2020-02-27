import axios from 'axios'
import history from '../history'

// const UPDATE_INFO = 'UPDATE_INFO'
// const updatedInfo = info => ({
//   type: UPDATE_INFO,
//   info
// })

// export const updateInfo = (info, id) => async dispatch => {
//   try {
//     const {data} = await axios.put(`/api/users/${id}`, info)
//     // console.log(data)
//     dispatch(updatedInfo(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// const initialState = {}
// export default function(state = initialState, action) {
//   switch (action.type) {
//     case UPDATE_INFO:
//       return {...action.info}
//     default:
//       return state
//   }
// }
