// tv4 stands for Tiny Validator 4
import tv4 from 'tv4'
import stateSchema from './stateSchema'

export default ({ dispatch, getState }) => next => action => {
  next(action)
  const isStateValid = tv4.validate(getState(), stateSchema)
  if (!isStateValid) {
    console.warn('Invalid state detected after dispatching action', action)
  }
}
