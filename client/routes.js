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
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
