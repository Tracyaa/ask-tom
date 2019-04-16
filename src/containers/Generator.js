import React, { Component } from 'react';

class Generator extends Component {

  render() {

    return (
      <div className="idea-card">
        <h2>{this.props.idea.idea_type}</h2>
      </div>
    );
  }
};

export default Generator;
