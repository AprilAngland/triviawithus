/* eslint-disable radix */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import socket from '../socket'
import {TriviaHimHerQuestion, TriviaHimHerVote, TriviaHimHerWinner} from '.'
import queryString from 'query-string'
import {getQuestion} from '../store'

class TriviaHimHer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    // socket.emit('PromptQuestionFromHost')
    let id = parseInt(queryString.parse(this.props.location.search).id)
    let type = queryString.parse(this.props.location.search).type
    if (!id) {
      id = 1
    }
    if (!type) {
      type = 'question'
    }
    this.setState({id, type})
    this.props.getQuestion(id)
  }

  componentWillUnmount() {
    socket.emit('SuspendQuestionFromHost')
  }
  render() {
    return (
      <div>
        <h3>TriviaHimHer</h3>
        {this.props.question && this.state.type === 'question' ? (
          <TriviaHimHerQuestion
            id={this.state.id}
            question={this.props.question}
          />
        ) : this.props.question && this.state.type === 'vote' ? (
          <TriviaHimHerVote id={this.state.id} question={this.props.question} />
        ) : (
          <TriviaHimHerWinner />
        )}
        {/* <TriviaHimHerWinner /> */}
      </div>
    )
  }
}

const mapState = state => ({
  question: state.triviaHimHer.curQuestion,
  user: state.user
})
const mapDispatch = dispatch => ({
  getQuestion: id => {
    dispatch(getQuestion(id))
  }
})

export default connect(mapState, mapDispatch)(TriviaHimHer)

TriviaHimHer.propTypes = {
  // email: PropTypes.string
}
