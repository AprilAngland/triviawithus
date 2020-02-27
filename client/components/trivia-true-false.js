import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const TriviaTrueFalse = props => {
  // const {email} = props
  // console.log('TriviaTrueFalse component')
  return (
    <div className="wrapped">
      <h3>TriviaTrueFalse</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(TriviaTrueFalse)

TriviaTrueFalse.propTypes = {
  // email: PropTypes.string
}
