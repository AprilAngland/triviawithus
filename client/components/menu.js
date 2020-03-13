import React from 'react'
import {connect} from 'react-redux'
import {getMenu} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {Card, CardContent, Typography} from '@material-ui/core'
import socket from '../socket'
/**
 * COMPONENT
 */

const styles = {
  root: {
    background: 'rgba(255, 255,255, 0.8)',
    marginTop: '10vh',
    marginBottom: '5vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    color: 'black',
    justifyContent: 'flex-start',
    margin: '20px'
  },
  body: {
    flex: '5 0 15vh',
    textAlign: 'center'
  }
}
class Menu extends React.Component {
  componentDidMount() {
    this.props.getMenu()
  }
  render() {
    const {classes} = this.props
    const showEng = this.props.user.language === 'EN'
    const menu = this.props.menu

    const horsDdoeuvre = menu
      ? menu.filter(dish => dish.section === 'Hors D doeuvre')
      : []
    const firstCourse = menu
      ? menu.filter(dish => dish.section === 'First course')
      : []
    const entree = menu ? menu.filter(dish => dish.section === 'Entree') : []
    const desserts = menu
      ? menu.filter(dish => dish.section === 'Desserts')
      : []

    return (
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.body}>
            <Typography variant="h5" component="h2" align="center">
              {showEng ? `Our Menu` : `菜单`}
            </Typography>
            <Typography variant="h6" component="h4" align="center">
              {showEng ? `Hors D doeuvre` : `餐前小食`}
            </Typography>
            {horsDdoeuvre.map(dish => (
              <Typography key={dish.id}>
                {showEng
                  ? JSON.stringify(dish.text)
                  : JSON.stringify(dish.translation)}
              </Typography>
            ))}
            <Typography variant="h6" component="h4" align="center">
              {showEng ? `First course` : `前菜`}
            </Typography>
            {firstCourse.map(dish => (
              <Typography key={dish.id}>
                {showEng
                  ? JSON.stringify(dish.text)
                  : JSON.stringify(dish.translation)}
              </Typography>
            ))}
            <Typography variant="h6" component="h4" align="center">
              {showEng ? `Entree` : `主菜`}
            </Typography>
            {entree.map(dish => (
              <Typography key={dish.id}>
                {showEng
                  ? JSON.stringify(dish.text)
                  : JSON.stringify(dish.translation)}
              </Typography>
            ))}
            <Typography variant="h6" component="h4" align="center">
              {showEng ? `Dessert` : `甜品`}
            </Typography>
            {desserts.map(dish => (
              <Typography key={dish.id}>
                {showEng
                  ? JSON.stringify(dish.text)
                  : JSON.stringify(dish.translation)}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({user: state.user, menu: state.menu.menuAll})
const mapDispatch = dispatch => ({
  getMenu: () => {
    dispatch(getMenu())
  }
})

export default connect(mapState, mapDispatch)(withStyles(styles)(Menu))
