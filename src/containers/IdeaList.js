import React, { Component } from 'react';
import ideaAdapter from '../adapters/ideaAdapter';
import IdeaCard from '../components/IdeaCard'


class IdeaList extends Component {

  state = {
    ideas: []
  }

  componentDidMount() {
    ideaAdapter.getIdeas()
    .then(resp => resp.json())
    .then(ideas => {
      this.setState({ideas})
    })
  }

  updateIdeaList = () => {

  }

  render() {
    console.log(this.state.ideas)
    const ideaCards = this.state.ideas.map(idea => <IdeaCard idea={idea}/>)
    return (
      <div className="idea-list">
        {ideaCards}
      </div>
    );
  }
};

export default IdeaList;
