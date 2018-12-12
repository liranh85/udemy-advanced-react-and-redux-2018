import axios from 'axios'
import { AUTH_ERROR, AUTH_USER } from './types'

export const signup = (formProps) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token })
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
  }
}
