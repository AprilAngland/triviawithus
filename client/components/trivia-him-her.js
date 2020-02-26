import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {TriviaHimHerQuestion, TriviaHimHerResult} from '.'
/**
 * COMPONENT
 */
export const TriviaHimHer = props => {
  // const {email} = props
  console.log('TriviaHimHer component')
  return (
    <div className="wrapped">
      <h3>TriviaHimHer</h3>
      <TriviaHimHerQuestion idx={1} />
      <TriviaHimHerResult idx={1} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(TriviaHimHer)

TriviaHimHer.propTypes = {
  // email: PropTypes.string
}
