import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from 'src/components/CommentBox'
import CommentList from 'src/components/CommentList'

class App extends Component {
  renderButton() {
    return (
      <button>Sign {this.props.auth ? 'out' : 'in'}</button>
    )
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          <Link to="/">{this.renderButton()}</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(App)
