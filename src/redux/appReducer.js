import { combineReducers } from 'redux'
import likeReducer from './likeReducers'
import titleReducer from './titleReducers'

const appReducer = combineReducers({
  likeReducer,
  titleReducer,
})

export default appReducer