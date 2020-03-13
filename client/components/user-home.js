import React from 'react'
import {connect} from 'react-redux'
import {getHome, updateInfo, setDisplayedQuestion} from '../store'
import {withStyles} from '@material-ui/core/styles'
import socket from '../socket'
import {Card, Button, TextField} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
const styles = {
  root: {
    background: 'rgba(255, 255,255, 0.8)',
    marginTop: '10vh',
    marginBottom: '5vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    color: 'black',
    justifyContent: 'flex-start',
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
      entreechoice1: 'not sure',
      openYes: false,
      openNo: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    // if (this.props.user.type === 'guest') {
    //   socket.on('ToGuest', question => {
    //     window.location.replace('/Game')
    //     this.props.setDisplayedQuestion(question)
    //   })
    // }
  }
  handleClickOpenYes = () => {
    this.setState({openYes: true})
  }
  handleCloseYes = () => {
    this.setState({openYes: false})
  }

  handleClickOpenNo = () => {
    this.setState({openNo: true})
  }
  handleCloseNo = () => {
    this.setState({openNo: false})
  }
  // component did mount does not work
  //

  // componentDidMount() {
  //   console.log('component did mount props', this.props.user)
  //   console.log('component did mount state', this.state)
  //   this.setState(this.props.user)
  //   console.log('component did mount state', this.state)
  // }
  static getDerivedStateFromProps(props, state) {
    // console.dir(props.user)
    // if (props.user && state.nickname === 'placeholder') {
    if (props.user && state.nickname === 'placeholder') {
      return props.user
    } else {
      return state
    }
  }

  handleChange(event) {
    // console.log('typing', event.target.name, event.target.value)
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
              disabled={true}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              error={this.state.nickname === ''}
              required
              helperText={
                this.state.nickname === '' && 'Nickname Cannot be Empty'
              }
              label={showEng ? 'Preferred Name' : `昵称`}
              variant="standard"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
            {/* <TextField
              id="filled-basic"
              label={
                showEng
                  ? 'Head Count (1 if coming, 2 if bringing +1)'
                  : `大概来几个人?`
              }
              // helperText="1 if coming, 2 if bringing +1"
              variant="standard"
              name="expectedcount"
              type="number"
              value={this.state.expectedcount}
              onChange={this.handleChange}
            /> */}
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
              required
              helperText={
                this.state.entreechoice === 'not sure' &&
                'Menu Choice is not Optional'
              }
              error={this.state.entreechoice === 'not sure'}
              select
              label={showEng ? 'Entree Selection' : `主菜选项`}
              value={this.state.entreechoice}
              name="entreechoice"
              onChange={this.handleChange}
              SelectProps={{
                native: true
              }}
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
              id="standard-select-currency-native"
              // required
              // helperText={
              //   this.state.entreechoice === 'not sure' &&
              //   'Menu Choice is not Optional'
              // }
              // error={this.state.entreechoice === 'not sure'}
              select
              label={showEng ? 'Entree Selection for Plus One' : `家属主菜选项`}
              value={this.state.entreechoice1}
              name="entreechoice1"
              onChange={this.handleChange}
              SelectProps={{
                native: true
              }}
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
                {showEng ? 'I am coming alone' : `我不带家属！`}
              </option>
            </TextField>
            <TextField
              id="filled-basic"
              label={
                showEng
                  ? 'Allergies or Dietary Restrictions'
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
              onClick={() => {
                this.state.entreechoice !== 'not sure' &&
                this.state.nickName !== ''
                  ? this.handleClickOpenYes()
                  : this.handleClickOpenNo()
              }}
            >
              {showEng ? 'Save Changes and accept invitation' : '保存更改'}
            </Button>
            <Dialog
              open={this.state.openYes}
              onClose={this.handleCloseYes}
              // fullWidth="true"
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Thank you!</DialogTitle>
              <DialogContent>
                {/* <DialogContentText id="alert-dialog-description">
                  {`You Chose ${answer}`}
                </DialogContentText> */}
                <DialogContentText id="alert-dialog-description">
                  {showEng
                    ? `Thank you! A email confirmation has been sent to your email ${this.props.user.email}, we are looking forward to seeing you!`
                    : `谢谢， 我们欢迎你的光临！`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleCloseYes} color="primary" autoFocus>
                  Yay!!
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={this.state.openNo}
              onClose={this.handleCloseNo}
              // fullWidth="true"
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Thank you!</DialogTitle>
              <DialogContent>
                {/* <DialogContentText id="alert-dialog-description">
                  {`You Chose ${answer}`}
                </DialogContentText> */}
                <DialogContentText id="alert-dialog-description">
                  {showEng
                    ? `Make sure you made menu choice and fill in your nick name`
                    : `菜单选项不能为空！`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleCloseNo} color="primary" autoFocus>
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
    console.log('dispatched info', info)
    dispatch(updateInfo(info, id))
  },

  setDisplayedQuestion: question => {
    dispatch(setDisplayedQuestion(question))
  }
})

export default connect(mapState, mapDispatch)(withStyles(styles)(Home))
