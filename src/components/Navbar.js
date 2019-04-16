import React, {
  Component
} from 'react';
import {
  Route,
  Link,
  withRouter
} from 'react-router-dom'

class Navbar extends Component {
  render() {
    console.log(this.props.currentUser.user)
    return (
      <nav className="nav-bar">
        <ul className="lk">
          <Link to="/">Home</Link>
          <Link to="/ideas">Ideas</Link>
          <Link to="/survey">Survey</Link>
          { !this.props.currentUser.user ? <Link to="/signup">Signup</Link> : null }
          { !this.props.currentUser.user ? <Link to="/login">Login</Link> : null }
          { this.props.currentUser.user ? <a onClick={(e) => this.props.handleLogout()}>Logout</a> : null }
        </ul>
      </nav>
    );
  }
};

export default withRouter(Navbar);