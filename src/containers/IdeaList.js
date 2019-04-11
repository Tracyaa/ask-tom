import React, { Component } from 'react';
import ideaAdapter from '../adapters/ideaAdapter';
import IdeaCard from '../components/IdeaCard'


class IdeaList extends Component {

  state = {
    ideas: []
  }


  // componentDidMount() {
  //   ideaAdapter.getIdeas()
  //   .then(resp => resp.json())
  //   .then(ideas => {
  //     this.setState({ideas})
  //   })
  // }

  render() {
    return (
      <div className="idea-list">

      </div>
    );
  }
};

export default IdeaList;
