import React from 'react'
import {connect} from 'react-redux'
import socket from '../socket'
import {Wait} from '.'
import {voteQuestion, resetQuestion, finishedDisplayedQuestion} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const styles = {
  root: {
    background: 'rgba(177, 175, 215, 0.6)',
    marginTop: '20vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    // background: '#b1afd7',
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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content'
  }
}
class TriviaHimHerQuestion extends React.Component {
  constructor() {
    super()
    this.state = {open: false}
  }
  handleClickOpen = () => {
    this.setState({open: true})
  }
  handleClose = () => {
    this.setState({open: false})
  }
  componentDidMount() {
    console.log('Component Did Mount TriviaHimHerQuestion')
  }
  render() {
    const NUM_QUESTIONS = 8
    const {classes} = this.props
    if (this.props.questions !== null && this.props.user.type === 'admin') {
      const toEmit = {
        ...this.props.question,
        displayType: 'question',
        questionType: 'himher'
      }
      console.log('FromHost', this.props.question)
      socket.emit('FromHost', toEmit)
    }
    const showEng = this.props.user.language === 'EN'
    // let answer = undefined
    return (
      <div>
        {this.props.question.id ? (
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
                  ? `Vote: ${this.props.question.text} ${this.props.question.id}`
                  : `问: ${this.props.question.translation} ${this.props.question.id}`}
              </Typography>
              <br />
            </CardContent>

            <CardActions className={classes.answerBar}>
              <Button
                size="large"
                disabled={
                  this.props.user.type === 'admin' ||
                  !!this.props.userVoteInfo.finished.find(
                    question =>
                      question &&
                      question.questionType === 'himher' &&
                      question.id === this.props.question.id
                  )
                }
                onClick={() => {
                  let answer = 'Him'
                  this.props.voteQuestion(
                    this.props.question.id,
                    answer,
                    this.props.user.id
                  )
                  this.props.finishedDisplayedQuestion(this.props.question)
                  this.handleClickOpen()
                }}
              >
                {showEng ? 'Him' : '他'}
              </Button>

              <Button
                size="large"
                disabled={
                  this.props.user.type === 'admin' ||
                  !!this.props.userVoteInfo.finished.find(
                    question =>
                      question &&
                      question.questionType === 'himher' &&
                      question.id === this.props.question.id
                  )
                }
                onClick={() => {
                  let answer = 'Her'
                  this.props.voteQuestion(
                    this.props.question.id,
                    answer,
                    this.props.user.id
                  )
                  this.props.finishedDisplayedQuestion(this.props.question)
                  this.handleClickOpen()
                }}
              >
                {showEng ? 'Her' : '她'}
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {'Thank you for Voting!'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {showEng
                      ? `Too late to change your mind :}, please wait for host to show next question`
                      : '现在已经不能反悔了， 请等待下一道题目！'}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary" autoFocus>
                    Okayyy
                  </Button>
                </DialogActions>
              </Dialog>
            </CardActions>
          </Card>
        ) : (
          <Wait from="loading" />
        )}
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
