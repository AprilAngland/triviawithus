import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import socket from '../socket'
import {TriviaHimHerQuestion, TriviaHimHerVote} from '.'
import queryString from 'query-string'
import {setDisplayedQuestion} from '../store'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log(
      'component did mount game',
      'state',
      this.state.question,
      'props',
      this.props
    )
    socket.on('ToGuest', question => {
      this.setState({question: question})
      this.props.setDisplayedQuestion(question)
    })
  }

  render() {
    console.log(
      'rendering game',
      'state',
      this.state.question,
      'props',
      this.props.question
    )
    return (
      <div>
        <h3>Game</h3>
        {!this.props.question ? (
          ''
        ) : this.props.question.displayType === 'question' ? (
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

/**
 * CONTAINER
 */
const mapState = state => ({
  question: state.userInfo.question
  // user: state.user
})
const mapDispatch = dispatch => ({
  setDisplayedQuestion: question => {
    dispatch(setDisplayedQuestion(question))
  }
})

export default connect(mapState, mapDispatch)(Game)

Game.propTypes = {
  // email: PropTypes.string
}
