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
    return (
      <nav className="nav-bar">
        <ul>
          <Link to="/">Home</Link>	&nbsp;
          <Link to="/ideas">Ideas</Link> 	&nbsp;
          <Link to="/survey">Survey</Link> 	&nbsp;
          <Link to="/signup">Signup</Link> 	&nbsp;
          <Link to="/login">Login</Link> 	&nbsp;
          <p onClick={(e) => this.props.handleLogout()}>Logout</p>
        </ul>
      </nav>
    );
  }
};

export default withRouter(Navbar);