import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getHome, updateInfo} from '../store'
import {withStyles} from '@material-ui/core/styles'

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField
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
    margin: '20px',
    '& .MuiTextField-root': {
      margin: '10px',
      width: '70vw'
    }
  },
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
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
      menuchoice: 'not sure'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {}

  static getDerivedStateFromProps(props, state) {
    // when it typed, it sends its props back to its state
    console.log('getDerivedStateFromProps')
    console.dir(state)
    console.dir(props.user)
    // debugger;
    if (props.user && state.nickname === 'placeholder') {
      return props.user
    } else {
      return state
    }
  }
  handleChange(event) {
    console.log('typing')
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
              label={showEng ? 'Preferred Name' : `昵称`}
              variant="filled"
              name="nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label={
                showEng
                  ? 'Expected Count(Including your plus ones: 0 if coming alone, 0.5 if not sure, 1 if coming, 2 if bringing spouse)'
                  : `大概来几个人?`
              }
              variant="filled"
              name="expectedcount"
              value={this.state.expectedcount}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label={showEng ? 'Note' : `备注`}
              variant="filled"
              name="notetohost"
              value={this.state.notetohost}
              onChange={this.handleChange}
            />
            <TextField
              id="standard-select-currency-native"
              select
              label={showEng ? 'Entree Selection' : `主菜选项`}
              value={this.state.menuchoice}
              name="menuchoice"
              onChange={this.handleChange}
              SelectProps={{
                native: true
              }}
              helperText="What do you want as Entree?"
              variant="filled"
            >
              {' '}
              <option value="Leg of Lamb Italian Style with Garlic">
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
              variant="filled"
              name="notetochef"
              value={this.state.notetochef}
              onChange={this.handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
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
