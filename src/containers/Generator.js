import React, { Component } from 'react';

class IdeaCard extends Component {

  render() {
    if (this.props.idea) {
      return (
        <div className="idea-card">
          <h2>{this.props.idea.idea_type}</h2>
        </div>
      );
    } else {
      return (
        <div className="idea-card">
          <h2>{this.props.newIdea}</h2>
        </div>
      )
    }
  }
};

export default IdeaCard;
