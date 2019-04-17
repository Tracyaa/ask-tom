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
      console.log("none")
      return (
        <div className="text-center">
          <h2 className="text-white-i">Made with 💙 by </h2>

          <div class="stage">

            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>

          </div>
          <br/>

          <div class="stage">
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
              <div class="layer-2"></div>
            </div>
            <div class="stage">
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
                <div class="layer-3"></div>
              </div>


        </div>
      );
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