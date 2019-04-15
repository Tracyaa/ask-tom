import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import SurveyForm from './components/SurveyForm'
import './App.css';
import { Route, Link, withRouter } from 'react-router'

class App extends Component {
  state = {
    user: {}
  }

  componentDidMount(){
  if(localStorage.getItem('token')){
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then( res => res.json())
    .then(userJSON => {
      this.setState({
        user: userJSON.user
      }, () => {
        this.props.history.push('/rappers')
      })
    })
  }
}

  signupSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {
        this.setState({ user: userData.user }, () => {
          console.log("This is what I'm getting after signing up: ", userData)
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/rappers");
        });
      });
  };
  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {
        localStorage.setItem('token', userData.jwt)
        this.setState(
          { user: userData.user },
          () => this.props.history.push("/rappers")
        )
      });
  };

  handleLogout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token");
    this.props.history.push("/signup");
  }

  render() {

    return (
      <div className="Ask-Tom center">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default withRouter(App);
// <Home path="/"/>
