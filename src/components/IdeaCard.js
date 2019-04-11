import React, { Component } from 'react';


class IdeaCard extends Component {

  render() {
    return (
      <div className="idea-card">
        <h1>{this.props.newIdea}</h1>
      </div>
    );
  }
};

export default IdeaCard;
