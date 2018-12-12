import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {
  // Instance property
  onSubmit = (formProps) => {
    // signup is an action creator
    this.props.signup(formProps)
  }

  render() {
    // the handleSubmit prop is injected by the reduxForm HOC
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
          />
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>Sign Up</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage }
}

// The `compose` helper (from Redux) makes it easier and cleaner to wrap a component with numerous HOC
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup)
