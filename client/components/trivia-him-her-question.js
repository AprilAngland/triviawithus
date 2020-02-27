import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import socket from '../socket'
import {voteQuestion, resetQuestion} from '../store'
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
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    background: '#b1afd7',
    color: 'black',
    borderRadius: 3,
    justifyContent: 'flex-start',
    boxShadow: '0 3px 5px 2px',
    height: '50vh',
    margin: '20px'
  },
  buttonBar: {
    margin: '5px',
    flex: '2 0 3vh',
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
    return (
      <div>
        <Card className={classes.root} variant="outlined">
          <CardActions className={classes.buttonBar}>
            <Button
              size="small"
              id={1}
              href={`/triviahimhers?id=${this.props.question.id}&type=vote`}
            >
              Show Vote!
            </Button>
            <Button size="small" onClick={this.props.resetQuestion}>
              Restart!
            </Button>
          </CardActions>
          <CardContent className={classes.body}>
            <Typography variant="h5" component="h2" align="center">
              {`Question: ${this.props.question.text} ${this.props.question.id}`}
            </Typography>
          </CardContent>
          <CardActions className={classes.answerBar}>
            <Button
              size="large"
              onClick={() =>
                this.props.voteQuestion(this.props.question.id, 'him', 1)
              }
            >
              Him
            </Button>

            <Button
              size="large"
              onClick={() =>
                this.props.voteQuestion(
                  this.props.question.id,
                  'her',
                  this.props.user.id
                )
              }
            >
              Her
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({user: state.user})
const mapDispatch = dispatch => ({
  voteQuestion: (id, ans, userId) => {
    dispatch(voteQuestion(id, ans, userId))
  },
  resetQuestion: () => {
    dispatch(resetQuestion())
  }
})

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(TriviaHimHerQuestion))

TriviaHimHerQuestion.propTypes = {
  // email: PropTypes.string
}
