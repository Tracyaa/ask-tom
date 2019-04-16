import React, {
  Component
} from 'react';
// import logo from './logo.svg';

import Signup from './/components/Signup';
import Login from './components/Login';
import IdeaList from './containers/IdeaList'
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

  componentDidMount() {
    let token = localStorage.getItem('token')
    if(token) {
      console.log(token)
      fetch('http://dry-shelf-10302.herokuapp.com/api/v1/current_user', { headers: { Authorization: `Bearer ${token}` } })
      .then( r => r.json() )
      .then( data => this.setState({ currentUser: data }))
      this.props.history.push('/')
    } else {
      this.props.history.push('/')
    } 
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
          localStorage.setItem("token", userData.jwt);
          this.setState({
            currentUser: userData.user
          }, () => {
            console.log("This is what I'm getting after signing up: ", userData)
            // this.props.history.push("/users");
          });
      });
  };

  loginSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    console.log(userInfo)
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
          console.log('userData', userData)
          localStorage.setItem('token', userData.jwt)
          this.setState({
            currentUser: userData
          }, () => console.log('app user state', this.state.currentUser.user))
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
        <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        {/*<Home signupSubmitHandler={this.signupSubmitHandler} loginSubmitHandler={this.loginSubmitHandler}/>*/}
        <Route exact path="/survey" component={SurveyForm}/>
        <Route exact path="/signup" render={() => <Signup submitHandler={this.signupSubmitHandler} />} />
        <Route exact path="/login" render={() => <Login loginSubmitHandler={this.loginSubmitHandler} />} />
        <Route exact path="/ideas" component={IdeaList}/>
        <Route exact path="/" render={() => <Home signupSubmitHandler={this.signupSubmitHandler} loginSubmitHandler={this.loginSubmitHandler}/>}/>
      </div>
    );
  }
}

export default withRouter(App);
// <Home path="/"/>