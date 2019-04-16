import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter'

class IdeaCard extends Component {

  saveIdea = (e) => {
    let sentenceText = e.target.parentElement.firstChild.firstChild.innerText
    let idea = {
      idea_type: sentenceText,
      mod: this.props.mod
    }

    adapter.postIdea(idea)
      .then(keywords => {
        alert("Thanks you!")
      })

  }

  render() {
    if (this.props.idea) {
      return (
        <div className="idea-card">
          <h2>{this.props.idea.idea_type}</h2>
        </div>
      );
    } else {
      return (
        <div class="text-center">
        <div className="idea-card">
          <h2>{this.props.newIdea}</h2>
        </div>
        <br/>
        <br/>
        <button class="btn btn-white" onClick={(e) => this.saveIdea(e)} type="submit" name="Submit">Save Idea</button>
        </div>
      )
    }
  }
};

export default IdeaCard;