import { combineReducers } from 'redux'
import commentsReducer from 'src/reducers/comments'

export default combineReducers({
  comments: commentsReducer
})
