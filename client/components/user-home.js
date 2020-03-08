import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getHome, updateInfo} from '../store'
import {withStyles} from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import socket from '../socket'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField
} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
const styles = {
  root: {
    background: 'rgba(255, 255,255, 0.8)',
    marginTop: '10vh',
    marginBottom: '2vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // background: '#b1afd7',
    color: 'black',
    // borderRadius: 3,
    justifyContent: 'flex-start',
    // boxShadow: '0 3px 5px 2px',
    margin: '20px',
    '& .MuiTextField-root': {
      margin: '10px',
      width: '70vw'
    }
  },
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  },
  button: {
    margin: '20px'
  }
}
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      nickname: 'placeholder',
      expectedcount: '0',
      notetohost: '',
      notetochef: '',
      entreechoice: 'not sure',
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.user.type === 'guest') {
      socket.on('ToGuest', question => {
        window.location.replace('/Game')
      })
    }
  }
  handleClickOpen = () => {
    this.setState({open: true})
  }
  handleClose = () => {
    this.setState({open: false})
  }
  static getDerivedStateFromProps(props, state) {
    console.dir(props.user)
    // debugger;
    if (props.user && state.nickname === 'placeholder') {
      return props.user
    } else {
      return state
    }
  }
  handleChange(event) {
    console.log('typing', event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log('button submitted', this.state)
    this.props.updateInfo(this.state, this.props.user.id)
  }
  render() {
    const {classes} = this.props
    const showEng = this.props.user.language === 'EN'

    return (
      <div>
        <Card
          className={classes.root}
          variant="outlined"
          onSubmit={this.handleSubmit}
        >
          <form noValidate autoComplete="off">
            <TextField
              id="filled-basic"
              label={showEng ? 'Login Email' : `邮箱`}
              variant="outlined"
              name="email"
              value={this.state.email}
              disabled="disabled"
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label={showEng ? 'Preferred Name' : `昵称`}
              variant="outlined"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label={
                showEng
                  ? 'Expected Count(0 if coming alone, 1 if coming, 2 if bringing spouse)'
                  : `大概来几个人?`
              }
              variant="standard"
              name="expectedcount"
              value={this.state.expectedcount}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label={showEng ? 'Note' : `备注`}
              variant="standard"
              name="notetohost"
              value={this.state.notetohost}
              onChange={this.handleChange}
            />
            <TextField
              id="standard-select-currency-native"
              select
              label={showEng ? 'Entree Selection' : `主菜选项`}
              value={this.state.entreechoice}
              name="entreechoice"
              onChange={this.handleChange}
              SelectProps={{
                native: true
              }}
              helperText=""
              variant="standard"
            >
              {' '}
              <option value="lamb">
                {showEng
                  ? 'Leg of Lamb Italian Style with Garlic'
                  : `意大利羊腿 `}
              </option>
              <option value="sea bass">
                {showEng
                  ? 'Atlantic Sea Bass with Lemon & Herbs'
                  : `亚特兰大黑鲈鱼`}
              </option>
              <option value="risotto">
                {showEng
                  ? 'Roasted Vegetable risotto for vegetarians'
                  : `蔬菜奶油焗饭`}
              </option>
              <option value="not sure">
                {showEng ? "I don't know, surprise me" : `随便！`}
              </option>
            </TextField>
            <TextField
              id="filled-basic"
              label={
                showEng
                  ? 'Special note to the chef(allergies, dietary restrictions, etc)'
                  : `有没有食物过敏或者忌口`
              }
              variant="standard"
              name="notetochef"
              value={this.state.notetochef}
              onChange={this.handleChange}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              code
              onClick={() => {
                this.handleClickOpen()
              }}
            >
              {showEng ? 'Save Changes and get Email invitation' : '保存更改'}
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              // fullWidth="true"
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Thank you for Voting!'}
              </DialogTitle>
              <DialogContent>
                {/* <DialogContentText id="alert-dialog-description">
                  {`You Chose ${answer}`}
                </DialogContentText> */}
                <DialogContentText id="alert-dialog-description">
                  {showEng
                    ? `Thank you! A email invitation has been sent to your email ${this.props.user.email}, we are looking forward to seeing you!`
                    : `谢谢， 我们欢迎你的光临！`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Yay!!
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({user: state.user, Home: state.menu.menuAll})
const mapDispatch = dispatch => ({
  updateInfo: (info, id) => {
    dispatch(updateInfo(info, id))
  }
})

export default connect(mapState, mapDispatch)(withStyles(styles)(Home))

Home.propTypes = {
  // email: PropTypes.string
}
