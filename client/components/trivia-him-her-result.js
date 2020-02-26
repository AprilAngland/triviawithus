import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getQuestion} from '../store'
// import {Card, Row, CardTitle, Icon, Col} from 'react-materialize'
/**
 * COMPONENT
 */
class TriviaHimHerResult extends React.Component {
  componentDidMount() {
    this.props.getQuestion(this.props.idx)
  }
  render() {
    const winners = this.props.result.users
    const ans = this.props.result.ans
    const himCount = this.props.result.ansCntHim
    const herCount = this.props.result.ansCntHer

    return (
      <div className="wrapped">
        <h3>TriviaHimHerResult</h3>
        {/* <p>{JSON.stringify(this.props.)}</p> */}
        <p>{himCount}</p>
        <p>{herCount}</p>
        <p>{ans}</p>
        <p>{JSON.stringify(winners)}</p>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  result: state.triviaHimHer
})
const mapDispatch = dispatch => ({
  getQuestion: idx => {
    dispatch(getQuestion(idx))
  }
})

export default connect(mapState, mapDispatch)(TriviaHimHerResult)

TriviaHimHerResult.propTypes = {
  // email: PropTypes.string
}
