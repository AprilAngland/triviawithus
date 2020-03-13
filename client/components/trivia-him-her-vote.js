/* eslint-disable no-new */
import React from 'react'
import {connect} from 'react-redux'
import {resetQuestion} from '../store'
import socket from '../socket'
import {Wait} from '.'
import {withStyles} from '@material-ui/core/styles'
import {TriviaHimHerVoteChart} from '.'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button
} from '@material-ui/core'

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
  buttonBar: {
    margin: '5px',
    flex: '0 0 3vh',
    display: 'flex',
    justifyContent: 'space-between'
  },
  media: {
    display: 'flex',
    flex: '5 2 40vh',
    justifyContent: 'center',
    marginBottom: '5vh'
  },
  body: {
    flex: '0 0 5vh'
  }
}

class TriviaHimHerVote extends React.Component {
  componentDidMount() {}
  render() {
    const NUM_QUESTIONS = 8
    const {classes} = this.props

    if (this.props.questions !== null && this.props.user.type === 'admin') {
      const toEmit = {
        ...this.props.question,
        displayType: 'vote',
        questionType: 'himher'
      }
      socket.emit('FromHost', toEmit)
    }
    const showEng = this.props.user.language === 'EN'

    return (
      <div>
        {this.props.question.id ? (
          <Card className={classes.root} variant="outlined">
            {this.props.user.type === 'admin' ? (
              <CardActions className={classes.buttonBar}>
                <Button
                  disabled={this.props.question.id === NUM_QUESTIONS}
                  size="small"
                  href={`/triviahimhers?id=${this.props.question.id +
                    1}&type=question`}
                >
                  Next Question!
                </Button>
                {this.props.question.id === NUM_QUESTIONS && (
                  <Button size="small" href="/triviahimhers?type=winner">
                    Winner?
                  </Button>
                )}
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
            ) : (
              ''
            )}
            <CardContent className={classes.body}>
              <Typography variant="h5" component="h2" align="center">
                {showEng
                  ? `Vote: ${this.props.question.text} ${this.props.question.id}`
                  : `问: ${this.props.question.translation} ${this.props.question.id}`}
              </Typography>
              <Typography variant="body2" component="p" align="center">
                {this.props.question.users &&
                this.props.question.users.length > 0
                  ? `Winners: ${this.props.question.users
                      .map(user => user.nickname || user.email)
                      .join(', ')}`
                  : ''}
                <br />
              </Typography>
            </CardContent>
            <CardMedia className={classes.media}>
              <TriviaHimHerVoteChart question={this.props.question} />
            </CardMedia>
          </Card>
        ) : (
          <Wait from="loading" />
        )}
      </div>
    )
  }
}

const mapState = state => ({user: state.user})
const mapDispatch = dispatch => ({
  resetQuestion: () => {
    dispatch(resetQuestion())
  }
})

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TriviaHimHerVote))
