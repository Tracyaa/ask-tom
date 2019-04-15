import React, { Component } from 'react';
import keywordAdapter from '../adapters/keywordAdapter'

class SurveyForm extends Component {

  state = {
    subject: '',
    type: '',
    purpose: ''
  }

  changeSurveyState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state))
  }

  createNewKeywordApi = (e, keywordObj) => {
    e.preventDefault()
    keywordAdapter.
    console.log(keywordObj);
  }

  render() {

    return (
      <div className="survey-form">
        <p>
        <form onSubmit={(e) => this.createNewKeywordApi(e, this.state)} onChange={(e) => this.changeSurveyState(e)}>
          Create a/an <input type="text" name="subject" value={this.state.subject} placeholder="educational, delightful, ...etc."/>
          <input type="text" name="type" value={this.state.type} placeholder="website, game, ...etc."/>
          for <input type="text" name="purpose" value={this.state.purpose} placeholder="dogs, kids, ...etc."/>
          <input type="submit" name="submit" />
        </form>
        </p>
      </div>
    )
  }
}

export default SurveyForm;
