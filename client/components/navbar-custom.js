/* eslint-disable complexity */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import {auth} from '../store'
import socket from '../socket'
import {withStyles} from '@material-ui/core/styles'
import {AppBar, Tabs, Tab} from '@material-ui/core'
//front end
// // Listen for events
// socket.on('chat', function(data){
//     feedback.innerHTML = '';
//     output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
// });

// socket.on('typing', function(data){
//     feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
// });

const styles = {
  root: {
    background: '#b1afd7',
    color: 'black',
    '&$disabled': {
      color: 'white'
    },
    '&$hover': {
      color: 'white'
    }
    // display: 'flex',
    // flexGrow: 1,
    // flexDirection: 'column',
    // background: 'white',
    // color: 'black',
    // borderRadius: 3,
    // justifyContent: 'flex-start',
    // boxShadow: '0 3px 5px 2px',
    // height: '50vh',
    // margin: '20px'
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
    const {classes} = this.props
    return (
      <div>
        <h1>TRIVIA WITH US</h1>
        <AppBar className={classes.root} position="static">
          <Tabs onChange={this.handleChange} value={this.state.value}>
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
              <Tab value={3} label="Home" to="/Home" component={Link} />
            ) : (
              ''
            )}
            {this.props.isLoggedIn ? (
              <Tab value={4} label="Game" to="/Game" component={Link} />
            ) : (
              ''
            )}
            {this.props.isLoggedIn ? (
              <Tab value={5} label="Menu" to="/Menu" component={Link} />
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
                label="LogOut"
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
        {/* <Button
          onClick={() => {
            socket.emit('chat', {})
          }}
        ></Button> */}
      </div>
    )
  }
}

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

export default connect(mapState, mapDispatch)(withStyles(styles)(NavbarCustom))

/**
 * PROP TYPES
 */
// NavbarCustom.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
//   isAdmin: PropTypes.bool.isRequired
// }
