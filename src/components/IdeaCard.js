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
        alert("Thank you!")
      })
  }


  render() {

    // console.log(this.props.removeFromFav);

    if (this.props.idea) {

      return (
        <div>
          <li className="idea-card" onClick={() => this.props.clickToFavorites(this.props.currentUser.user.id, this.props.idea.id)}>
            {this.props.idea.idea_type}
          </li>
          <br/>
        </div>
      );
    } else {
      return (
        <div className="text-center">
        <div className="idea-card">
          <h2>{this.props.newIdea}</h2>
        </div>
        <br/>
        <br/>
        <button className="btn btn-white" onClick={(e) => this.saveIdea(e)} type="submit" name="Submit">Save Idea</button>
        </div>
      )
    }
  }
};

export default IdeaCard;
