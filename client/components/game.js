import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Game = props => {
  // const {email} = props
  // console.log('Game component')
  return (
    <div className="wrapped">
      <h3>Game!!</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(Game)

Game.propTypes = {
  // email: PropTypes.string
}
