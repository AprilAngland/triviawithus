import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import socket from '../socket'
import {voteQuestion, resetQuestion, finishedDisplayedQuestion} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core'

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
    height: '60vh',
    margin: '20px'
  },
  buttonBar: {
    margin: '5px',
    flex: '0 0 3vh',
    display: 'flex',
    justifyContent: 'space-between'
  },
  body: {
    flex: '5 0 15vh'
  },
  answerBar: {
    flex: '5 0 15vh',
    justifyContent: 'space-evenly',
    margin: '40px'
  }
}
class TriviaHimHerQuestion extends React.Component {
  componentDidMount() {}
  render() {
    const NUM_QUESTIONS = 4
    const {classes} = this.props
    if (this.props.questions !== null && this.props.user.type === 'admin') {
      const toEmit = {
        ...this.props.question,
        displayType: 'question',
        questionType: 'himher'
      }
      socket.emit('FromHost', toEmit)
    }
    const showEng = this.props.user.language === 'EN'
    return (
      <div>
        <Card className={classes.root} variant="outlined">
          {this.props.user.type === 'admin' ? (
            <CardActions className={classes.buttonBar}>
              <Button
                size="small"
                id={1}
                href={`/triviahimhers?id=${this.props.question.id}&type=vote`}
              >
                Show Vote!
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
          ) : (
            ''
          )}
          <CardContent className={classes.body}>
            <Typography variant="h5" component="h2" align="center">
              {showEng
                ? `Question: ${this.props.question.text} ${this.props.question.id}`
                : `问: ${this.props.question.translation} ${this.props.question.id}`}
            </Typography>
          </CardContent>

          <CardActions className={classes.answerBar}>
            <Button
              size="large"
              disabled={
                !!this.props.userVoteInfo.finished.find(
                  question =>
                    question &&
                    question.questionType === 'himher' &&
                    question.id === this.props.question.id
                )
              }
              onClick={() => {
                console.log(' dispatch(finishedDisplayedQuestion())')
                this.props.voteQuestion(
                  this.props.question.id,
                  'him',
                  this.props.user.id
                )
                this.props.finishedDisplayedQuestion(this.props.question)
              }}
            >
              {showEng ? 'Him' : '他'}
            </Button>

            <Button
              size="large"
              disabled={
                !!this.props.userVoteInfo.finished.find(
                  question =>
                    question &&
                    question.questionType === 'himher' &&
                    question.id === this.props.question.id
                )
              }
              onClick={() => {
                console.log(' dispatch(finishedDisplayedQuestion())')
                this.props.voteQuestion(
                  this.props.question.id,
                  'her',
                  this.props.user.id
                )
                this.props.finishedDisplayedQuestion(this.props.question)
              }}
            >
              {showEng ? 'Her' : '她'}
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({user: state.user, userVoteInfo: state.userVoteInfo})
const mapDispatch = dispatch => ({
  voteQuestion: (id, ans, userId) => {
    dispatch(voteQuestion(id, ans, userId))
  },
  resetQuestion: () => {
    dispatch(resetQuestion())
  },
  finishedDisplayedQuestion: question => {
    dispatch(finishedDisplayedQuestion(question))
  }
})

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TriviaHimHerQuestion))

TriviaHimHerQuestion.propTypes = {
  // email: PropTypes.string
}
