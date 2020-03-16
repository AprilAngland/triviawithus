import React from 'react'
import {connect} from 'react-redux'
import {TriviaHimHerQuestion, Wait} from '.'
class Game extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {}

  render() {
    const question = this.props.question
    // console.log(
    //   question.displayType,
    //   question.text,
    //   this.props.status,
    //   question.displayType &&
    //     question.text &&
    //     question.displayType === 'question' &&
    //     this.props.status === 'playing'
    // )
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
        {question.displayType &&
          question.text &&
          question.displayType === 'question' &&
          this.props.status === 'playing' && (
            <TriviaHimHerQuestion id={question.id} question={question} />
          )}
        {question.displayType &&
          question.text &&
          question.displayType === 'vote' &&
          this.props.status === 'playing' && <Wait from="screen" />}
      </div>
    )
  }
}

const mapState = state => ({
  // setup: state.setup,
  question: state.userVoteInfo.question,
  status: state.userVoteInfo.status,
  finished: state.userVoteInfo.finished
})

export default connect(mapState, null)(Game)
