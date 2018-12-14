import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Signout from './components/auth/Signout'
import Feature from './components/Feature'

// The Redux Thunk middleware allows us to create async action creators, by enabling us to return a function from the action creator rather than only an object. When a function is returned, it will be immdeiately called with `dispatch` as an argument, which we can then call as many times as we like, to dispatch different actions when we need to, e.g. when a request has completed.
// When compared to Redux Promise, Redux Thunk is superior, as it allows us to dispatch multiple actions, whereas with Redux Promose you return a promise, and once fulfilled, the action will be dispatched.
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/feature" exact component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
