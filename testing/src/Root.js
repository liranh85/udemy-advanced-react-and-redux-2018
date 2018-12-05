import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import async from 'src/middlewares/async'
import reducers from 'src/reducers'

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async)
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
