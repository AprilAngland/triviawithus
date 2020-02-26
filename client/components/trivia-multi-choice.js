import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const TriviaMultiChoice = props => {
  // const {email} = props
  console.log('TriviaMultiChoice component')
  return (
    <div className="wrapped">
      <h3>TriviaMultiChoice</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(TriviaMultiChoice)

TriviaMultiChoice.propTypes = {
  // email: PropTypes.string
}
