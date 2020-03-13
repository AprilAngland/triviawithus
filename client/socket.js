import io from 'socket.io-client'
import store, {
  eraseDisplayedQuestions,
  suspendDisplayedQuestion,
  setDisplayedQuestion,
  resumeDisplayedQuestion
} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('ResumeQuestionToGuest', () => {
  console.log('get socket ResumeQuestionToGuest')
  // window.location.replace('/Game')
  // console.log(history)
  // history.push('/Game')
  store.dispatch(resumeDisplayedQuestion())
})

socket.on('ResetUserToGuest', () => {
  console.log('get socket ResetUserToGuest')
  store.dispatch(eraseDisplayedQuestions())
})
socket.on('ToGuest', question => {
  console.log('get socket Question action SET_QUESTION', question)
  store.dispatch(setDisplayedQuestion(question))
})
socket.on('SuspendQuestionToGuest', () => {
  console.log('get SuspendQuestionToGuest  action SUSPEND_QUESTION')
  store.dispatch(suspendDisplayedQuestion())
})

export default socket
