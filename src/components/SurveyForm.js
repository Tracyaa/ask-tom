import React, { Component } from 'react';
import keywordAdapter from '../adapters/keywordAdapter'

class SurveyForm extends Component {

  state = {
    keywords: {},
    subject: '',
    keyword_type: '',
    purpose: ''
  }

  componentDidMount = () => {
    keywordAdapter.getKeywords()
    .then(resp => resp.json())
    .then(keywords => {
      this.setState({keywords: keywords[0]})
    })
  }

  changeSurveyState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state))
  }

  createNewKeywordApi = (e, keywordObj) => {
    e.preventDefault()
    // console.log(keywordObj);
    const newSubject = [...this.state.keywords.subject, keywordObj.subject]
    const newKeyword_type = [...this.state.keywords.keyword_type, keywordObj.keyword_type]
    const newPurpose = [...this.state.keywords.purpose, keywordObj.purpose]
    // debugger
    // keywordAdapter.patchKeyword(newSubject, newKeyword_type, newPurpose)
  }


  render() {
    console.log(this.state.keywords);
    return (
      <div className="survey-form">
        <p>
        <form onSubmit={(e) => this.createNewKeywordApi(e, this.state)}>
          Create a/an <input onChange={(e) => this.changeSurveyState(e)} type="text" name="subject" value={this.state.subject} placeholder="educational, delightful, ...etc."/>
        <input onChange={(e) => this.changeSurveyState(e)} type="text" name="keyword_type" value={this.state.type} placeholder="website, game, ...etc."/>
          for <input onChange={(e) => this.changeSurveyState(e)} type="text" name="purpose" value={this.state.purpose} placeholder="dogs, kids, ...etc."/>
          <input type="submit" name="submit" />
        </form>
        </p>
      </div>
    )
  }
}

export default SurveyForm;
