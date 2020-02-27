import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import user from './user'
import triviaHimHer from './trivia-him-her'
import userInfo from './user-info'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo']
}
const reducer = persistReducer(
  persistConfig,
  combineReducers({user, triviaHimHer, userInfo})
)
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)
export const persistor = persistStore(store)

export default store
export * from './user'
export * from './user-info'
export * from './trivia-him-her'
