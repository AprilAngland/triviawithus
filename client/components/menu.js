import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Menu = props => {
  // const {email} = props
  console.log('menu component')
  return (
    <div className="wrapped">
      <h3>Menu</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({})

export default connect(mapState)(Menu)

Menu.propTypes = {
  // email: PropTypes.string
}
