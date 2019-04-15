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
    filterTerm: 1,
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
          filterTerm: +mod,
          tools: filteredTools
        }, () => console.log(this.state.tools))


      })
  }

  clickGenerateIdea = () => {
    let sents;
    // let tools = this.state.tools[Math.floor(Math.random() * this.state.tools.length)]);
    // let tools = JSON.stringify(this.state.tools.map(tool => tool.name));
    let keyword_type = this.state.keywords.keyword_type[Math.floor(Math.random() * this.state.keywords.keyword_type.length)]

    let toolArray = this.state.tools.map(tool => tool.name);


    let tools = toolArray[Math.floor(Math.random() * 2)]

    let subject = this.state.keywords.subject[Math.floor(Math.random() * this.state.keywords.subject.length)]
    let purpose = this.state.keywords.purpose[Math.floor(Math.random() * this.state.keywords.purpose.length)]

    let purpose2 = this.state.keywords.purpose[Math.floor(Math.random() * this.state.keywords.purpose.length)]
    let purpose3 = this.state.keywords.purpose[Math.floor(Math.random() * this.state.keywords.purpose.length)]

    if (keyword_type === 'Game' && this.state.filterTerm > 1) {
      let tempGames = this.state.tools.filter(tool => tool.purpose === "games");
      let tmpGame = tempGames.map(tool => tool.name)


      let tempEtc = this.state.tools.filter(tool => tool.purpose != "games");
      let tmpEtc = tempEtc.map(tool => tool.name)


      let toolG2 = tmpGame[Math.floor(Math.random() * 2)]
      console.log(toolG2);
      let toolOther = tmpEtc[Math.floor(Math.random() * tmpEtc.length)]
      console.log(toolOther);

      tools = [toolG2, toolOther, tools]
      console.log(tools)
    }


    if (keyword_type === 'Blog' && this.state.filterTerm === 1) {
      sents = [
        `Make a ${subject} CLI trivia using ${tools} for ${purpose}`,
        `a ${subject} CLI game using ${tools} about ${purpose2} for ${purpose}. (That also shouts out Tom)`,
        `Build a ${subject} CLI about ${purpose} that only's for Flatiron Students! `
      ]


    } else {
      sents = [
        `Make a ${subject} ${keyword_type} using ${tools} for ${purpose}`,
        `a ${subject} ${keyword_type} using ${tools} about ${purpose2} for ${purpose}. (That also shouts out Tom)`,
        `Build a ${subject} ${keyword_type} about ${purpose} that only's for Flatiron Students! `
      ]
    }


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
        <Route exact path="/signup" render={() => <Signup submitHandler={this.props.signupSubmitHandler} />} />
        <Route exact path="/login" render={() => <Login loginSubmitHandler={this.props.loginSubmitHandler} />} />
        <Route exact path="/ideas" component={IdeaList}/>
        <Filter changeFilterTerm={this.changeFilterTerm} clickGenerateIdea={this.clickGenerateIdea}/>
        <IdeaCard newIdea={this.state.newIdea}/>

      </div>
    );
  }
}

export default withRouter(Home);
// export default withRouter{ Home };