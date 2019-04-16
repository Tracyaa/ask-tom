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
    }, console.log(this.state))
  }

  createNewKeywordApi = (e, keywordObj) => {
    e.preventDefault()
    // console.log(keywordObj);
    const newSubject = [...this.state.keywords.subject, keywordObj.subject]
    const newKeyword_type = [...this.state.keywords.keyword_type, keywordObj.keyword_type]
    const newPurpose = [...this.state.keywords.purpose, keywordObj.purpose]
    // debugger
    adapter.patchKeyword(newSubject, newKeyword_type, newPurpose)
      .then(resp => console.log(resp.json()))
      .then(() => {
        this.setState({
          success: 'Done!'
        })
      })
  }


  render() {
    // console.log(this.state.keywords);
    return (




      <div class="d-md-flex h-md-100 align-items-center">
      	<div class="col-md-6 p-0 bg-blue h-md-100">
      		<div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">


            <div className="survey-form">
              <p>
              <form onSubmit={(e) => this.createNewKeywordApi(e, this.state)}>
                Create a/an  <input onChange={(e) => this.changeSurveyState(e)} type="text" name="subject" value={this.state.subject} placeholder="educational, delightful, ...etc."/>
              <br/>
              <input onChange={(e) => this.changeSurveyState(e)} type="text" name="keyword_type" value={this.state.type} placeholder="website, game, ...etc."/>
              <br/>
                for  <input onChange={(e) => this.changeSurveyState(e)} type="text" name="purpose" value={this.state.purpose} placeholder="dogs, kids, ...etc."/>
              <br/>
              <button  class="btn btn-primary"  type="submit" name="submit"> Submit </button>
              </form>
              </p>
            </div>



      		</div>
      	</div>
      	<div class="col-md-6 p-0 bg-white h-md-100 loginarea">
      		<div class="success-text d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <p> {this.state.success} </p>


      		</div>
      	</div>
      </div>
    )
  }
}

export default SurveyForm;