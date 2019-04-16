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
    console.log('props in navbar', this.props.currentUser.user)
    return (
      <nav className="nav-bar">
        <ul>
          <Link to="/">Home</Link> 
          <Link to="/ideas">Ideas</Link>
          <Link to="/survey">Survey</Link>
          { !this.props.currentUser.user ? <Link to="/signup">Signup</Link> : null }
          { !this.props.currentUser.user ? <Link to="/login">Login</Link> : null }
          { this.props.currentUser.user ? <p onClick={(e) => this.props.handleLogout()}>Logout</p> : null }
        </ul>
      </nav>
    );
  }
};

export default withRouter(Navbar);