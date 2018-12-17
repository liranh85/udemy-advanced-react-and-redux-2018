import axios from 'axios'
import { AUTH_ERROR, AUTH_USER } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token })
    // There is an ongoing debate at the moment as for whether or not localStorage is truly a secure location for the JWT, as it might be compromised by a XSS attack on your website.
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
  }
}

export const signout = () => {
  localStorage.removeItem('token')

  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login' })
  }
}
