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
    if (this.props.newIdea === "") {

      return (
        <div className="text-center">
          <h2 className="text-white-i">Made with 💙 by </h2>

          <div className="stage">

            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>

          </div>
          <br/>

          <div className="stage">
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
              <div className="layer-2"></div>
            </div>
            <div className="stage">
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
                <div className="layer-3"></div>
              </div>


        </div>
      );
    } else if (this.props.idea != null) {

      return (
        <div className="text-center">
          <div>
        <li className="idea-card">{this.props.idea.idea_type}</li>
        </div>

        </div>
      )
    } else {
      console.log(this.props.newIdea)
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