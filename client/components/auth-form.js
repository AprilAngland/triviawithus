import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {Card, Button, TextField} from '@material-ui/core'

const styles = {
  root: {
    marginTop: '10vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    background: '#b1afd7',
    color: 'black',
    borderRadius: 3,
    justifyContent: 'flex-start',
    boxShadow: '0 3px 5px 2px',
    margin: '20px',
    '& .MuiTextField-root': {
      margin: '10px',
      width: '70vw'
    }
  },

  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  }
}

const AuthForm = props => {
  const {classes} = props
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Card className={classes.root} variant="outlined" onSubmit={handleSubmit}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit} name={name}>
          <TextField
            id="filled-basic"
            label="email"
            variant="standard"
            name="email"
          />
          <TextField
            htmlFor="password"
            id="filled-basic"
            label="password"
            variant="standard"
            name="password"
            type="password"
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </Card>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = withStyles(styles)(
  connect(mapLogin, mapDispatch)(AuthForm)
)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
