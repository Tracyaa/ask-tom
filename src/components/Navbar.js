import React, {
  Component
} from 'react';
import {
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'

class Navbar extends Component {

  state = {
    loginModalShow: false,
    signupModalShow: false
  }


  render() {
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
            <Link className="header-left" to="/ask-tom/">Home</Link>
            { this.props.currentUser.user ? <Link className="header-left" to="/ask-tom/ideas">Ideas</Link> : null }
            { this.props.currentUser.user ? <Link className="header-left" to="/ask-tom/survey">Survey</Link> : null }
            { !this.props.currentUser.user ? <Link className="header-right"
                                              variant="primary"
                                              onClick={() => this.setState({ signupModalShow: true})} >Sign Up</Link> : null }
            { !this.props.currentUser.user ? <Link className="header-right"
                                              variant="primary"
                                              onClick={() => this.setState({ loginModalShow: true})} >Login</Link> : null }
            { this.props.currentUser.user ? <Link className="header-right" onClick={(e) => this.props.handleLogout()}>Logout</Link> : null }
          </ul>
        </nav>
        <LoginModal loginSubmitHandler={this.props.loginSubmitHandler} show={this.state.loginModalShow} onHide={loginModalClose} />
        <SignupModal signupSubmitHandler={this.props.signupSubmitHandler} show={this.state.signupModalShow} onHide={signupModalClose} />
      </React.Fragment>
    );
  }
};

export default withRouter(Navbar);
