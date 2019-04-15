import React, {
  Component
} from 'react';
import IdeaList from '../containers/IdeaList'
import Filter from '../components/Filter'
import IdeaCard from '../components/IdeaCard'
import SurveyForm from '../components/SurveyForm'
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import adapter from '../adapters/adapter.js'
import {
  Route,
  Switch,
  Link,
  withRouter
} from 'react-router'

class Home extends Component {

  state = {
    filterTerm: 'All',
    newIdea: '',
    keywords: [],
    tools: []
  }
  componentDidMount() {
    adapter.getKeyword()
      .then(this.setKeywordStateFromDataBase)
  }

  setKeywordStateFromDataBase = (keywords) => {
    this.setState({
      keywords
    })
  }

  setToolsState = (tools) => {

    console.log(tools)
    this.setState({
      tools
    }, () => console.log(this.state.tools))
  }


  changeFilterTerm = (mod) => {
    adapter.getTool()
      .then(toolJSON => {
        let filteredTools = toolJSON.filter(tool => tool.mod.includes(+mod))
        this.setState({
          tools: filteredTools
        }, () => console.log(this.state.tools))


      })
  }

  clickGenerateIdea = () => {

    // let tools = this.state.tools[Math.floor(Math.random() * this.state.tools.length)]);
    // let tools = JSON.stringify(this.state.tools.map(tool => tool.name));
    let tools = this.state.tools.map(tool => tool.name);

    let subject = this.state.keywords.subject[Math.floor(Math.random() * this.state.keywords.subject.length)]
    let purpose = this.state.keywords.purpose[Math.floor(Math.random() * this.state.keywords.purpose.length)]

    let keyword_type = this.state.keywords.keyword_type[Math.floor(Math.random() * this.state.keywords.keyword_type.length)]

    console.log(keyword_type)
    console.log(subject)
    console.log(purpose)

    console.log(tools);

    console.log(this.state.keywords);


    const sents = [
      `Make a ${subject} ${keyword_type} using ${tools} for ${purpose}`,
      `a ${subject} ${keyword_type} using ${tools} for ${purpose}. (That also shouts out Tom)`,
      `Build a ${subject} ${keyword_type} that only's for Flatiron Students! `
    ]

    let newIdea = sents[Math.floor(Math.random() * sents.length)];


    this.setState({
      newIdea
    }, () => console.log(this.state.newIdea))

  }

  render() {
    return (
      <div className="ask-tom-home">
        <h1>Ask Tom Home Page</h1>
        <Route exact path="/survey" component={SurveyForm}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/ideas" component={IdeaList}/>
        <Filter changeFilterTerm={this.changeFilterTerm} clickGenerateIdea={this.clickGenerateIdea}/>
        <IdeaCard newIdea={this.state.newIdea}/>

      </div>
    );
  }
}

export default withRouter(Home);
// export default withRouter{ Home };
