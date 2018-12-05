import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'src/actions'
import requireAuth from 'src/components/requireAuth'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  // Bound arrow function
  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button type="submit">Submit comment</button>
          <button
            type="button"
            onClick={this.props.fetchComments}
            className="fetch-comments"
          >Fetch comments</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(requireAuth(CommentBox))
