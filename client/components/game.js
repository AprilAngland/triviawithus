import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import socket from '../socket'
import {TriviaHimHerQuestion, TriviaHimHerVote} from '.'
import Loading from './loading.js'
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
        {!this.props.question.text ? (
          <div>
            {/* Please Wait for Host to Prompt Questions */}
            <div>
              <Loading />
            </div>
          </div>
        ) : // <Loading />
        this.props.question.displayType === 'question' ? (
          <TriviaHimHerQuestion
            id={this.props.question.id}
            question={this.props.question}
          />
        ) : (
          <TriviaHimHerVote
            id={this.props.question.id}
            question={this.props.question}
          />
        )}
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

Game.propTypes = {
  // email: PropTypes.string
}
