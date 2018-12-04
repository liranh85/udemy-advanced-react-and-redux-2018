import React from 'react'
import ReactDOM from 'react-dom'
// This non-relative import style is enabled by the line `NODE_PATH=./` in the file ".env"
import Root from 'src/Root'
import App from 'src/components/App'

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'))