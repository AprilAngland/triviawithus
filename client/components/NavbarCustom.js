import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Button, Navbar, Icon, NavItem} from 'react-materialize'
import {auth} from '../store'

const NavbarCustom = ({handleClick, isLoggedIn, isAdmin}) => (
  <div>
    <h1>TRIVIA WITH US</h1>
    {/* <Button></Button> */}
    <div>
      {!isLoggedIn ? (
        <Navbar className="lavender" alignLinks="left">
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/signup">Sign Up</Link> */}
          <a href="/auth/google">Login with Google</a>
          <a href="/auth/google">Login with Wechat</a>
          <Link to="/login">Login as Admin</Link>
        </Navbar>
      ) : !isAdmin ? (
        <div>
          {/* The navbar will show these links after you log in as guest*/}
          <Navbar className="lavender" alignLinks="left">
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </Navbar>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links after you log in as admin*/}
          <Navbar className="lavender" alignLinks="left">
            <Link to="/home">Admin Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </Navbar>
        </div>
      )}
    </div>
    {/* <hr /> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.type === 'admin'
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavbarCustom)

/**
 * PROP TYPES
 */
NavbarCustom.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
}
