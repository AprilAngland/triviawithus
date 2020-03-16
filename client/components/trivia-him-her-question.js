import React from 'react'
import {connect} from 'react-redux'
import socket from '../socket'
import {Wait} from '.'
import {resetQuestion, setSetup} from '../store'
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

const styles = theme => ({
  root: {
    background: 'rgba(177, 175, 215, 0.6)',
    marginTop: '12vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    color: 'black',
    borderRadius: 3,
    justifyContent: 'flex-start',
    boxShadow: '0 3px 5px 2px',
    height: '76vh',
    margin: '10px'
  },
  buttonBar: {
    margin: '5px',
    flex: '0 0 3vh',
    display: 'flex',
    justifyContent: 'space-between'
  },
  ansButton: {
    transform: 'scale(5)',
    '&:hover': {
      transform: 'scale(6)'
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(3)',
      '&:hover': {
        transform: 'scale(4)'
      }
    }
  },
  body: {
    flex: '5 0 15vh'
  },
  answerBar: {
    flex: '5 0 15vh',
    justifyContent: 'space-evenly',
    margin: '40px'
  },
  voters: {display: 'flex', flexWrap: 'wrap', justifyContent: 'center'},
  voter: {width: '17vw', marginTop: '1vh', marginBottom: '1vh'}
})
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
    if (this.props.questions !== null && this.props.user.type === 'admin') {
      const toEmit = {
        ...this.props.question,
        displayType: 'question',
        questionType: 'himher'
      }
      this.props.setSetup({
        text: toEmit.text,
        translation: toEmit.translation,
        displayType: toEmit.displayType,
        questionType: toEmit.questionType
        // long:
        //   'llllllllongonrsghrsfhreuhfusra fgyeagfrsoabfhsrgffhafvhsfhjraewfafawfafwfafwafwafawfrwafeawfafsavghjsavghjsafvhaofah'
      })
    }
  }
  componentWillUnmount() {
    this.props.setSetup({
      text: '',
      translation: '',
      displayType: '',
      questionType: ''
    })
  }
  render() {
    let NUM_QUESTIONS = 8
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
              <Typography variant="h4" component="h1" align="center">
                {showEng
                  ? `Question ${this.props.question.id}/${NUM_QUESTIONS}:`
                  : `问 ${this.props.question.id}/${NUM_QUESTIONS}:`}
              </Typography>
              <br />
              <Typography variant="h3" component="h3" align="center">
                {showEng
                  ? `${this.props.question.text}`
                  : `${this.props.question.text}`}
              </Typography>
              <br />
              {this.props.user.type === 'admin' && (
                <Typography variant="h4" component="h3" align="center">
                  {this.props.userVoteInfo.length > 0
                    ? `Voters:`
                    : `No Voters Yet!`}
                </Typography>
              )}
              {this.props.user.type === 'admin' && (
                <Typography
                  align="center"
                  className={classes.voters}
                  component="h4"
                >
                  {this.props.userVoteInfo.length > 0 &&
                    this.props.userVoteInfo.map(voter => (
                      // [
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo,
                      //   ...this.props.userVoteInfo
                      // ].map(voter => (
                      <Typography
                        key={voter.id}
                        className={classes.voter}
                        component="p"
                        align="center"
                      >
                        {voter.nickname ? voter.nickname : voter.email}
                      </Typography>
                    ))}
                  <br />
                </Typography>
              )}
            </CardContent>

            <CardActions className={classes.answerBar}>
              <div
                size="small"
                className={classes.ansButton}
                onClick={() => {
                  let ans = 'Him'
                  socket.emit('AnswerFromGuest', {
                    ...this.props.user,
                    ans,
                    questionId: this.props.question.id
                  })
                  this.handleClickOpen()
                }}
              >
                <i className="fas fa-male"></i>
                {/* {showEng ? 'Him' : '他'} */}
              </div>

              <div
                size="small"
                className={classes.ansButton}
                onClick={() => {
                  let ans = 'Her'
                  socket.emit('AnswerFromGuest', {
                    ...this.props.user,
                    ans,
                    questionId: this.props.question.id
                  })
                  this.handleClickOpen()
                }}
              >
                <i className="fas fa-female"></i>
                {/* {showEng ? 'Her' : '她'} */}
              </div>
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
                      ? `You can still change your mind, otherwise wait for host to reveal result!!`
                      : '现在还可以反悔哦！或者请等待下一道题目！'}
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

const mapState = state => ({
  user: state.user,
  userVoteInfo: state.triviaHimHer.curQuestion.users
})
const mapDispatch = dispatch => ({
  resetQuestion: () => {
    dispatch(resetQuestion())
  },
  setSetup: question => {
    dispatch(setSetup(question))
  }
})

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TriviaHimHerQuestion))
