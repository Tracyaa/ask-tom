import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter'

class SurveyForm extends Component {

  state = {
    keywords: {},
    subject: '',
    keyword_type: '',
    purpose: '',
    success: ''
  }

  componentDidMount = () => {
    adapter.getKeyword()
      .then(keywords => {
        this.setState({
          keywords: keywords
        })
      })
  }

  changeSurveyState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createNewKeywordApi = (e, keywordObj) => {
    e.preventDefault()
    const newSubject = [...this.state.keywords.subject, keywordObj.subject]
    const newKeyword_type = [...this.state.keywords.keyword_type, keywordObj.keyword_type]
    const newPurpose = [...this.state.keywords.purpose, keywordObj.purpose]

    adapter.patchKeyword(newSubject, newKeyword_type, newPurpose)
      .then(resp => resp.json())
      .then(keywordsObj => {
        console.log(keywordsObj)
        if (keywordsObj.id) {
          this.setState({
            success: 'Done!'
          })
        } else {
          this.setState({
            success: 'Try again! (No swear words or gibberish, must be < 15 characters, and no empty fields)'
          })
        }
      })
  }


  render() {
    return (
      <div className="d-md-flex h-md-100 align-items-center">
      	<div className="col-md-6 p-0 bg-blue h-md-100">
      		<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">


            <div className="survey-form">
              <form onSubmit={(e) => this.createNewKeywordApi(e, this.state)}>
                Create a/an  <input onChange={(e) => this.changeSurveyState(e)} className="i-s" type="text" name="subject" value={this.state.subject} placeholder=" educational, delightful, ...etc. "/>
              <br/>
              <input onChange={(e) => this.changeSurveyState(e)} className="i-s" type="text" name="keyword_type" value={this.state.type} placeholder=" website, game, ...etc. "/>
              <br/>
                for  <input onChange={(e) => this.changeSurveyState(e)} className="i-s" type="text" name="purpose" value={this.state.purpose} placeholder=" dogs, kids, ...etc. "/>
              <br/>
              <button  className="btn btn-primary"  type="submit" name="submit"> Submit </button>
              </form>
            </div>
      		</div>
      	</div>
      	<div className="col-md-6 p-0 bg-white h-md-100 loginarea">
      		<div className="success-text d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <p> {this.state.success} </p>


      		</div>
      	</div>
      </div>
    )
  }
}

export default SurveyForm;