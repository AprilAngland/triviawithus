import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getQuestion} from '../store'

/**
 * COMPONENT
 */
class TriviaHimHerResult extends React.Component {
  componentDidMount() {
    this.props.getQuestion(this.props.idx)
  }
  render() {
    // const winners =
    return (
      <div className="wrapped">
        <h3>TriviaHimHerResult</h3>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({result: state.triviaHimHer})
const mapDispatch = dispatch => ({
  getQuestion: idx => {
    dispatch(getQuestion(idx))
  }
})

export default connect(mapState, mapDispatch)(TriviaHimHerResult)

TriviaHimHerResult.propTypes = {
  // email: PropTypes.string
}
