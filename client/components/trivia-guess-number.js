import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const TriviaGuessNumber = props => {
  // const {email} = props
  console.log('TriviaGuessNumber component')
  return (
    <div className="wrapped">
      <h3>TriviaGuessNumber</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(TriviaGuessNumber)

TriviaGuessNumber.propTypes = {
  // email: PropTypes.string
}
