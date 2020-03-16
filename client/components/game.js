import React from 'react'
import {connect} from 'react-redux'
import {TriviaHimHerQuestion, Wait} from '.'
import {getSetup} from '../store'
class Game extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getSetup()
  }

  render() {
    const setup = this.props.setup
    const question = this.props.question
    console.log('question')
    console.dir(question)
    console.log('setup')
    console.dir(setup)
    return (
      <div>
        {question.displayType && !question.text && (
          <div>
            <Wait from="loading" />
          </div>
        )}
        {this.props.status === 'paused' && (
          <div>
            <Wait from="host" />
          </div>
        )}
        {(question.displayType && question.text && question.displayType) ===
          'question' &&
          this.props.status === 'playing' && (
            <TriviaHimHerQuestion id={question.id} question={question} />
          )}
        {(question.displayType && question.text && question.displayType) ===
          'vote' &&
          this.props.status === 'playing' && <Wait from="screen" />}
      </div>
    )
  }
}

const mapState = state => ({
  setup: state.setup,
  question: state.userVoteInfo.question,
  status: state.userVoteInfo.status,
  finished: state.userVoteInfo.finished
})
const mapDispatch = dispatch => ({
  getSetup: () => {
    dispatch(getSetup())
  }
})

export default connect(mapState, mapDispatch)(Game)
