// Creating the reduxPromise middleware from scratch as practice

// This function stack is needed because that's what Redux expects
export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its `payload` property
  // If it doesn't, send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action)
  }
  // If it does, wait for it to resolve, and then create a new action with that data, and dispatch it
  action.payload.then((response) => {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}
