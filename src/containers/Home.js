import React, { Component } from 'react';
import IdeaList from '../containers/IdeaList'
import Filter from '../components/Filter'
import IdeaCard from '../components/IdeaCard'

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
        <h1>Ask Tom Home Page</h1>
        <Filter changeFilterTerm={this.changeFilterTerm} clickGenerateIdea={this.clickGenerateIdea}/>
        <IdeaCard newIdea={this.state.newIdea}/>
        <IdeaList filterTerm={this.state.filterTerm}/>
        <header className="ask-tom-header">
          <img src={"https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1501602372/alpaca-animal-farm-zoo-ALPACAS0817.jpg?itok=VZTNhadl"} alt="logo" />

        </header>
      </div>
    );
  }
}

export default Home;
