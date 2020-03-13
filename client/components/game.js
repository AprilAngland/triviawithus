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
    console.dir(this.props.question)
    return (
      <div>
        {this.props.question.displayType && !this.props.question.text && (
          <div>
            <Wait from="loading" />
          </div>
        )}
        {/* {!this.props.question.displayType && (
          <div>
            <Wait from="host" />
          </div>
        )} */}
        {this.props.status === 'paused' && (
          <div>
            <Wait from="host" />
          </div>
        )}
        {(this.props.question.displayType &&
          this.props.question.text &&
          this.props.question.displayType) === 'question' &&
          this.props.status === 'playing' && (
            <TriviaHimHerQuestion
              id={this.props.question.id}
              question={this.props.question}
            />
          )}
        {(this.props.question.displayType &&
          this.props.question.text &&
          this.props.question.displayType) === 'vote' &&
          this.props.status === 'playing' && <Wait from="host" />}
      </div>
    )
  }
}

const mapState = state => ({
  question: state.userVoteInfo.question,
  status: state.userVoteInfo.status,
  finished: state.userVoteInfo.finished
})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Game)
