import { combineReducers } from 'redux'
import commentsReducer from 'src/reducers/comments'
import authReducer from 'src/reducers/auth'

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
})
