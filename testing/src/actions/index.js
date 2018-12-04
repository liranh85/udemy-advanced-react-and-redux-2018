import axios from 'axios'
import { CHANGE_AUTH, FETCH_COMMENTS, SAVE_COMMENT } from 'src/actions/types'
import { commentsApi } from 'src/common/constants'

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export function fetchComments() {
  const response = axios.get(commentsApi)
  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
