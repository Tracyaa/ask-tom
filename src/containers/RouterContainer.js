import React, { Component } from 'react'
import { Route } from 'react-router'
import Signup from '../components/Signup';
import SurveyForm from '../components/SurveyForm'
import Home from '../containers/Home';
import IdeaList from '../containers/IdeaList'


export default class RouterContainer extends Component {
  render() {

  	return (
  	  <React.Fragment>
	    <Route exact path="/ask-tom/survey" component={SurveyForm}/>
	    <Route exact path="/ask-tom/ideas" render={() => <IdeaList currentUser={this.props.currentUser} />} />
	    <Route exact path="/ask-tom/" render={() => <Home signupSubmitHandler={this.props.signupSubmitHandler} loginSubmitHandler={this.props.loginSubmitHandler}/>}/>
	  </React.Fragment>
	)
  }
}
