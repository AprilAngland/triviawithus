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
    marginTop: '10vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    background: '#b1afd7',
    color: 'black',
    borderRadius: 3,
    justifyContent: 'flex-start',
    boxShadow: '0 3px 5px 2px',
    // height: '502vh',
    margin: '20px'
  },
  // buttonBar: {
  //   margin: '5px',
  //   flex: '2 0 3vh',
  //   display: 'flex',
  //   justifyContent: 'space-between'
  // },
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

Menu.propTypes = {
  // email: PropTypes.string
}
