import React, {
  Component
} from 'react';
import {
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'

class Navbar extends Component {

  state = {
    loginModalShow: false,
    signupModalShow: false
  }


  render() {
    // console.log(this.props)
    let loginModalClose = () => this.setState({
      loginModalShow: false
    });
    let signupModalClose = () => this.setState({
      signupModalShow: false
    });
    return (
      <React.Fragment>
        <nav className="nav-bar">
          <ul className="lk">
            <Link to="/">Home</Link>
            <Link to="/ideas">Ideas</Link>
            <Link to="/survey">Survey</Link>
            { !this.props.currentUser.user ? <Button
                                              variant="primary"
                                              onClick={() => this.setState({ signupModalShow: true})} >Sign Up</Button> : null }
            { !this.props.currentUser.user ? <Button
                                              variant="primary"
                                              onClick={() => this.setState({ loginModalShow: true})} >Login</Button> : null }
            { this.props.currentUser.user ? <a onClick={(e) => this.props.handleLogout()}>Logout</a> : null }
          </ul>
        </nav>
        <LoginModal loginSubmitHandler={this.props.loginSubmitHandler} show={this.state.loginModalShow} onHide={loginModalClose} />
        <SignupModal signupSubmitHandler={this.props.signupSubmitHandler} show={this.state.signupModalShow} onHide={signupModalClose} />
      </React.Fragment>
    );
  }
};

export default withRouter(Navbar);
