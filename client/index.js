import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react'
import {Router} from 'react-router-dom'
import history from './history'
import store, {persistor} from './store'
import App from './app'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const defaultTheme = createMuiTheme({})
const {
  breakpoints,
  typography: {pxToRem}
} = defaultTheme

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h5: {
        fontSize: '1.3rem'
      },
      h4: {
        fontSize: '2rem',
        [breakpoints.down('xs')]: {
          fontSize: '1.9rem'
        }
      },
      h3: {
        fontSize: '2.3rem',
        [breakpoints.down('xs')]: {
          fontSize: '2.2rem'
        }
      },
      h2: {
        fontSize: '2.4rem'
      }
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
