import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const TriviaTrueFalse = props => {
  return (
    <div className="wrapped">
      <h3>TriviaTrueFalse</h3>
    </div>
  )
}
const mapState = state => ({})

export default connect(mapState)(TriviaTrueFalse)

TriviaTrueFalse.propTypes = {
  // email: PropTypes.string
}
