import React from 'react'
import {connect} from 'react-redux'
import {getMenu} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core'
/**
 * COMPONENT
 */

const styles = {
  root: {
    background: 'rgba(255, 255,255, 0.0)',
    marginTop: '10vh',
    marginBottom: '5vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    color: 'black',
    justifyContent: 'flex-start',
    margin: '20px'
  },
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  },
  paragraph: {
    margin: 'auto',
    marginTop: 20,
    maxWidth: 800
  },
  header: {
    fontFamily: 'calibre,serif',
    fontSize: 100,
    fontWeight: 'lighter'
  }
}
class Welcome extends React.Component {
  render() {
    const {classes} = this.props
    const showEng = true

    return (
      <div className={classes.root}>
        <CardContent className={classes.body}>
          {showEng ? (
            <div>
              <Typography align="center" className={classes.header}>
                <i>Welcome</i>
              </Typography>

              <Typography
                variant="h5"
                component="h5"
                className={classes.paragraph}
              >
                John and Tianxin will be celebrating their marriage on July
                18th, 2020, at the venue mentioned in the invitation. If you
                have received an invitation, please log in with a Google account
                and make your menu selection.
              </Typography>
            </div>
          ) : (
            `请等待主持揭晓答案！`
          )}
        </CardContent>
      </div>
    )
  }
}
//const mapState = state => ({user: state.user})
// const mapState = state => ({})
// const mapDispatch = dispatch => ({})

export default withStyles(styles)(Welcome)
