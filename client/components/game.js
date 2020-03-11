import React from 'react'
import PropTypes from 'prop-types'
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
    socket.on('ResetUserToGuest', () => {
      this.props.eraseDisplayedQuestions()
    })
    socket.on('ToGuest', question => {
      this.setState({question: question})
      this.props.setDisplayedQuestion(question)
    })
    socket.on('SuspendQuestionToGuest', () => {
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
