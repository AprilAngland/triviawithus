import React from 'react'
import {connect} from 'react-redux'
import {getMenu} from '../store'
import {getWinner} from '../store'
import socket from '../socket'
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
    background: 'rgba(177, 175, 215, 0.6)',
    marginTop: '20vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    color: 'black',
    borderRadius: 3,
    justifyContent: 'flex-start',
    boxShadow: '0 3px 5px 2px',
    height: '60vh',
    margin: '20px'
  },
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  },

  buttonBar: {
    margin: '5px',
    flex: '0 0 3vh',
    display: 'flex',
    justifyContent: 'space-between'
  }
}
class TriviaHimHerWinner extends React.Component {
  componentDidMount() {
    this.props.getWinner()
  }
  render() {
    // console.log('rendering loading')
    const {classes} = this.props

    return (
      <div>
        <Card className={classes.root} variant="outlined">
          <CardActions className={classes.buttonBar}>
            <Button disabled={true} size="small" id={1}>
              Show Vote!
            </Button>
            <Button
              disabled={false}
              size="small"
              href="/triviahimhers?type=winner"
            >
              Winner?
            </Button>
            <Button
              size="small"
              href="/triviahimhers?id=1&type=question"
              onClick={() => {
                this.props.resetQuestion()
                socket.emit('ResetUserFromHost')
              }}
            >
              Restart!
            </Button>
          </CardActions>
          <CardContent className={classes.body}>
            <Typography variant="h5" component="h2" align="center">
              {/* {this.props.winners && */}
              {this.props.winners &&
                this.props.winners.map(winner => (
                  <div key={winner.id}>
                    <Typography variant="h5" component="h2" align="center">
                      {winner.nickName ? winner.nickName : winner.email}
                    </Typography>
                  </div>
                ))}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
const mapState = state => ({
  user: state.user,
  winners: state.triviaHimHer.winners
})
// const mapState = state => ({})
const mapDispatch = dispatch => ({
  getWinner: () => {
    dispatch(getWinner())
  }
})

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TriviaHimHerWinner))
