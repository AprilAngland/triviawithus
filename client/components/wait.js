import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getMenu} from '../store'
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
    marginTop: '10vh',
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
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  }
}
class Wait extends React.Component {
  render() {
    console.log('rendering loading')
    const {classes} = this.props
    const showEng = this.props.user.language === 'EN'

    return (
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.body}>
            {this.props.from === 'host' && (
              <Typography variant="h5" component="h2" align="center">
                {showEng
                  ? `Please wait for host to prompt question`
                  : `请等待主持人提问！`}
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }
}
const mapState = state => ({user: state.user})
// const mapState = state => ({})
// const mapDispatch = dispatch => ({})

export default connect(mapState, null)(withStyles(styles)(Wait))
