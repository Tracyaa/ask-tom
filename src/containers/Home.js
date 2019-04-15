import React, { Component } from 'react';
import IdeaList from '../containers/IdeaList'
import Filter from '../components/Filter'
import IdeaCard from '../components/IdeaCard'
import SurveyForm from '../components/SurveyForm'
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import { Route, Switch, Link, withRouter } from 'react-router'

class Home extends Component {

  state = {
    filterTerm: 'All',
    newIdea: ''
  }

  changeFilterTerm = (filterTerm) => {
    this.setState({filterTerm})
  }

  clickGenerateIdea = () => {
    const newIdea = Math.floor(Math.random() * 100);
    this.setState({newIdea}, () => console.log(this.state.newIdea))

  }



  render() {
    return (
      <div className="ask-tom-home">



        <Route exact path="/survey" component={SurveyForm}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <h1>Ask Tom Home Page</h1>
        <Filter changeFilterTerm={this.changeFilterTerm} clickGenerateIdea={this.clickGenerateIdea}/>
        <IdeaCard newIdea={this.state.newIdea}/>
        <IdeaList filterTerm={this.state.filterTerm}/>

      </div>
    );
  }
}

export default withRouter (Home);
// export default withRouter{ Home };
