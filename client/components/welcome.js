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
    fontSize: 75,
    fontWeight: 'lighter'
  }
}
class Welcome extends React.Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <CardContent className={classes.body}>
          <div>
            <Typography align="center" className={classes.header}>
              <i>Welcome</i>
            </Typography>

            <Typography
              variant="h5"
              component="h5"
              className={classes.paragraph}
            >
              John and Tianxin will be celebrating their marriage on July 18th,
              2020, at the venue mentioned in the invitation. If you have
              received an invitation, please log in with a Google account and
              make your menu selection.
            </Typography>
          </div>
          <br />
          <br />
          <div>
            <Typography align="center" className={classes.header}>
              <i> 欢迎！</i>
            </Typography>

            <Typography
              variant="h5"
              component="h5"
              className={classes.paragraph}
            >
              约翰和天新要在二零二零年七月十八号举行婚礼。婚礼地点在曼哈顿。
              请你用天新提供的登录账户和密码登陆，点菜。
            </Typography>
          </div>
        </CardContent>
      </div>
    )
  }
}

export default withStyles(styles)(Welcome)
