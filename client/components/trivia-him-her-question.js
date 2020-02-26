import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getQuestion} from '../store'

/**
 * COMPONENT
 */
class TriviaHimHerQuestion extends React.Component {
  componentDidMount() {
    this.props.getQuestion(this.props.idx)
  }
  render() {
    return (
      <div className="wrapped">
        <h3>TriviaHimHerQuestion</h3>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({question: state.triviaHimHer})
const mapDispatch = dispatch => ({
  getQuestion: idx => {
    dispatch(getQuestion(idx))
  }
})

export default connect(mapState, mapDispatch)(TriviaHimHerQuestion)

TriviaHimHerQuestion.propTypes = {
  // email: PropTypes.string
}
