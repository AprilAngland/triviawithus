import io from 'socket.io-client'
import store, {
  eraseDisplayedQuestions,
  suspendDisplayedQuestion,
  setDisplayedQuestion,
  resumeDisplayedQuestion,
  hostRecordQuestion
} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('ResumeQuestionToGuest', () => {
  store.dispatch(resumeDisplayedQuestion())
})

socket.on('ResetUserToGuest', () => {
  store.dispatch(eraseDisplayedQuestions())
})
socket.on('ToGuest', question => {
  store.dispatch(setDisplayedQuestion(question))
})
socket.on('SuspendQuestionToGuest', () => {
  store.dispatch(suspendDisplayedQuestion())
})

socket.on('AnswerToHost', user => {
  store.dispatch(hostRecordQuestion(user))
})

export default socket
