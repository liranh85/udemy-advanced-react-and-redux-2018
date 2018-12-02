import React from 'react'
import ReactDOM from 'react-dom'
// This non-relative import style is enabled by the line `NODE_PATH=src/` in the file ".env"
import App from 'components/App'

ReactDOM.render(<App />, document.querySelector('#root'))