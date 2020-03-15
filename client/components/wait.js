import React from 'react'
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
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  }
}
class Wait extends React.Component {
  render() {
    const {classes} = this.props
    const showEng = this.props.user.language === 'EN'

    return (
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.body}>
            {this.props.from === 'host' && (
              <Typography variant="h4" component="h4" align="center">
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
