import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import user from './user'
import menu from './menu'
import triviaHimHer from './trivia-him-her'
import userVoteInfo from './user-vote-info'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userVoteInfo', 'user']
}
const reducer = persistReducer(
  persistConfig,
  combineReducers({user, triviaHimHer, userVoteInfo, menu})
)
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)
export const persistor = persistStore(store)

export default store
export * from './user'
export * from './user-vote-info'
export * from './menu'
export * from './trivia-him-her'
