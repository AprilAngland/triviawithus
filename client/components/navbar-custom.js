/* eslint-disable complexity */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import socket from '../socket'
import {withStyles} from '@material-ui/core/styles'
import {AppBar, Tabs, Tab} from '@material-ui/core'

const styles = {
  root: {
    // marginBottom: '100px',
    background: '#b1afd7',
    color: 'black',
    '&$disabled': {
      color: 'white'
    },
    '&$hover': {
      color: 'white'
    }
  }
}

class NavbarCustom extends React.Component {
  constructor(props) {
    super()
    this.state = {value: false}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event, newValue) => {
    // console.log(event, newValue)
    this.setState({value: newValue})
  }
  render() {
    console.log('navbar rendering', this.state, this.props)
    const {classes} = this.props
    const showEng = this.props.user.language === 'EN'
    return !this.props.user ? (
      ''
    ) : (
      <div>
        <AppBar className={classes.root} position="fixed">
          <Tabs
            onChange={this.handleChange}
            value={this.state.value}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {!this.props.isLoggedIn ? (
              <Tab value={0} label="Login with Google" href="/auth/google" />
            ) : (
              ''
            )}
            {!this.props.isLoggedIn ? (
              <Tab
                value={1}
                label="Login as Admin"
                to="/login"
                component={Link}
                onClick={() => {
                  this.setState({value: false})
                }}
              />
            ) : (
              ''
            )}
            {!this.props.isLoggedIn ? (
              <Tab
                value={2}
                label="中文用户登陆"
                to="/login"
                component={Link}
                onClick={() => {
                  this.setState({value: false})
                }}
              />
            ) : (
              ''
            )}
            {this.props.isLoggedIn ? (
              <Tab
                value={3}
                label={showEng ? 'Home' : '主页'}
                to="/Home"
                component={Link}
              />
            ) : (
              ''
            )}
            {this.props.isLoggedIn ? (
              <Tab
                value={5}
                label={showEng ? 'Menu' : '菜单'}
                to="/Menu"
                component={Link}
              />
            ) : (
              ''
            )}
            {this.props.isLoggedIn && !this.props.isAdmin ? (
              <Tab
                value={4}
                label={showEng ? 'Trivia!' : '有奖竞猜'}
                to="/Game"
                component={Link}
              />
            ) : (
              ''
            )}
            {this.props.isAdmin ? (
              <Tab
                value={7}
                label="TriviaHimHer"
                to="/TriviaHimHers"
                component={Link}
              />
            ) : (
              ''
            )}
            {this.props.isAdmin ? (
              <Tab
                value={8}
                label="TriviaMultiChoice"
                to="/TriviaMultiChoices"
                component={Link}
              />
            ) : (
              ''
            )}
            {this.props.isAdmin ? (
              <Tab
                value={9}
                label="TriviaTrueFalse"
                to="/TriviaTrueFalses"
                component={Link}
              />
            ) : (
              ''
            )}
            {this.props.isAdmin ? (
              <Tab
                value={10}
                label="TriviaGuessNumber"
                to="/TriviaGuessNumbers"
                component={Link}
              />
            ) : (
              ''
            )}{' '}
            {this.props.isLoggedIn ? (
              <Tab
                value={6}
                label={showEng ? 'logOut' : '退出登录'}
                href="#"
                onClick={() => {
                  this.props.handleClick()
                  this.setState({value: false})
                }}
              />
            ) : (
              ''
            )}
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
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

export default connect(mapState, mapDispatch)(withStyles(styles)(NavbarCustom))

/**
 * PROP TYPES
 */
// NavbarCustom.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
//   isAdmin: PropTypes.bool.isRequired
// }
