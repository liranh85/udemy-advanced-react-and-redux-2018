import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderLinks() {
    return this.props.authenticated
      ? (
        <React.Fragment>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </React.Fragment>
      )
  }

  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
