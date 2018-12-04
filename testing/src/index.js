import React from 'react'
import ReactDOM from 'react-dom'
// This non-relative import style is enabled by the line `NODE_PATH=./` in the file ".env"
import Root from 'src/Root'
import App from 'src/components/App'

ReactDOM.render(
  // The Root component was created to make the Redux setup reusable, so it can be used from test files as well, which import components directly, and thus need to be wrapped with the Provider tag to have access to the Redux store
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'))
