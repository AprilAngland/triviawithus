import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {setDisplayedQuestion} from './store'
import socket from './socket'
import {
  Login,
  UserHome,
  Menu,
  Game,
  TriviaHimHer,
  TriviaGuessNumber,
  TriviaMultiChoice,
  TriviaTrueFalse
} from './components'

import {me} from './store'

class Routes extends Component {
  componentDidMount() {
    if (this.props.user.type === 'guest') {
      console.log(
        'in route, conponent did mout, it is subscribed to sockect to guest'
      )
      socket.on('ToGuest', question => {
        this.props.setDisplayedQuestion(question)
        window.location.replace('/Game')
      })
    }
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route path="/login" component={Login} />
        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
            <Route path="/menu" component={Menu} />
            <Route path="/game" component={Game} />
            <Route path="/TriviaHimHers" component={TriviaHimHer} />
            <Route path="/TriviaTrueFalses" component={TriviaTrueFalse} />
            <Route path="/TriviaMultiChoices" component={TriviaMultiChoice} />
            <Route path="/TriviaGuessNumbers" component={TriviaGuessNumber} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
})

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    setDisplayedQuestion: question => {
      dispatch(setDisplayedQuestion(question))
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
