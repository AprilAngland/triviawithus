import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const TriviaHimHerResult = props => {
  // const {email} = props
  console.log('TriviaHimHerResult component')
  return (
    <div className="wrapped">
      <h3>TriviaHimHerResult</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(TriviaHimHerResult)

TriviaHimHerResult.propTypes = {
  // email: PropTypes.string
}
