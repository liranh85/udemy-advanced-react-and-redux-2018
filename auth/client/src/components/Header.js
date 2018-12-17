import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// Importing css files in this fashion is enabled by create-react-app thanks to the webpack configuration is includes
import './headerStyle.css'

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
      <div className="header">
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
