import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {resetQuestion} from '../store'
import socket from '../socket'
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
    marginBottom: '20px'
  }
}

class TriviaHimHerVote extends React.Component {
  componentDidMount() {}
  render() {
    const NUM_QUESTIONS = 4
    const {classes} = this.props
    console.log(
      'rendering TriviaHimHerVote',
      this.props.question,
      this.props.user.type
    )

    if (this.props.questions !== null && this.props.user.type === 'admin') {
      const toEmit = {
        ...this.props.question,
        displayType: 'vote',
        questionType: 'himher'
      }
      socket.emit('FromHost', toEmit)
    }
    return (
      <div>
        <Card className={classes.root} variant="outlined">
          <CardActions className={classes.buttonBar}>
            <Button
              disabled={this.props.question.id === NUM_QUESTIONS}
              size="small"
              href={`/triviahimhers?id=${this.props.question.id +
                1}&type=question`}
            >
              Next Question!
            </Button>
            <Button
              size="small"
              href="/triviahimhers?id=1&type=question"
              onClick={this.props.resetQuestion}
            >
              Restart!
            </Button>
          </CardActions>
          <CardContent className={classes.body}>
            <Typography variant="h5" component="h2" align="center">
              {`Vote: ${this.props.question.text} ${this.props.question.id}`}
            </Typography>
            <Typography color="textSecondary">
              {'answer: ' + this.props.question.ans}
            </Typography>
            <Typography color="textSecondary">
              {this.props.question.ansCntHim + ' of you answered him'}
            </Typography>
            <Typography color="textSecondary">
              {this.props.question.ansCntHer + ' of you answered her'}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.question.users
                ? JSON.stringify(
                    this.props.question.users.map(user => user.email)
                  )
                : ''}
              <br />
            </Typography>
          </CardContent>
        </Card>
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

TriviaHimHerVote.propTypes = {}
