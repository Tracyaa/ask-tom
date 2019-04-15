import React, {
  Component
} from 'react';
// import logo from './logo.svg';


import Navbar from './components/Navbar';
import Home from './containers/Home';
import SurveyForm from './components/SurveyForm'
import './App.css';
import {
  Route,
  Link,
  withRouter
} from 'react-router'

class App extends Component {

  state = {
    currentUser: {}
  }

  signupSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    fetch("http://dry-shelf-10302.herokuapp.com/api/v1/users", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Accept': "application/json"
        },
        body: JSON.stringify({
          user: userInfo
        })
      })
      .then(resp => resp.json())
      .then(userData => {
        this.setState({
          currentUser: userData.user
        }, () => {
          console.log("This is what I'm getting after signing up: ", userData)
          localStorage.setItem("token", userData.jwt);
          // this.props.history.push("/users");
        });
      });
  };

  loginSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    fetch("http://dry-shelf-10302.herokuapp.com/api/v1/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          user: userInfo
        })
      })
      .then(resp => resp.json())
      .then(userData => {
        if (userData.jwt) {
          localStorage.setItem('token', userData.jwt)
          this.setState({
            currentUser: userData.user
          }, () => console.log(this.state.currentUser))
        }

      });
  };

  handleLogout = () => {
    this.setState({
      currentUser: {}
    }, () => console.log(this.state.currentUser))
    localStorage.removeItem("token");
    this.props.history.push("/");
  }


  render() {

    return (
      <div className="Ask-Tom center">
        <Navbar handleLogout={this.handleLogout}/>
        <Home signupSubmitHandler={this.signupSubmitHandler} loginSubmitHandler={this.loginSubmitHandler}/>
      </div>
    );
  }
}

export default withRouter(App);
// <Home path="/"/>
