import React from 'react'
import {connect} from 'react-redux'
import socket from '../socket'
import {
  TriviaHimHerQuestion,
  TriviaHimHerVote,
  Wait,
  TriviaHimHerWinner
} from '.'

import {
  setDisplayedQuestion,
  eraseDisplayedQuestions,
  suspendDisplayedQuestion
} from '../store'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log('on component did mount, socket connected? ', socket.connected)
    socket.on('ResetUserToGuest', () => {
      console.log('get socket ResetUserToGuest')
      this.props.eraseDisplayedQuestions()
    })
    socket.on('ToGuest', question => {
      console.log('get socket Question action SET_QUESTION')
      this.setState({question: question})
      this.props.setDisplayedQuestion(question)
    })
    socket.on('SuspendQuestionToGuest', () => {
      console.log('get SuspendQuestionToGuest  action SUSPEND_QUESTION')
      this.props.suspendDisplayedQuestion()
    })
  }

  render() {
    return (
      <div>
        <h3>Game</h3>
        {!this.props.question.displayType && ( //
          <div>
            <Wait from="host" />
          </div>
        )}
        {this.props.question.displayType && !this.props.question.text && (
          <div>
            <Wait from="loading" />
          </div>
        )}
        {(this.props.question.displayType &&
          this.props.question.text &&
          this.props.question.displayType) === 'question' && (
          <TriviaHimHerQuestion
            id={this.props.question.id}
            question={this.props.question}
          />
        )}
        {(this.props.question.displayType &&
          this.props.question.text &&
          this.props.question.displayType) === 'vote' && <Wait from="host" />}
      </div>
    )
  }
}

const mapState = state => ({
  question: state.userVoteInfo.question,
  finished: state.userVoteInfo.finished
})
const mapDispatch = dispatch => ({
  setDisplayedQuestion: question => {
    dispatch(setDisplayedQuestion(question))
  },
  eraseDisplayedQuestions: () => {
    dispatch(eraseDisplayedQuestions())
  },
  suspendDisplayedQuestion: () => {
    dispatch(suspendDisplayedQuestion())
  }
})

export default connect(mapState, mapDispatch)(Game)
