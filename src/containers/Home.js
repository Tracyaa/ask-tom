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
        `Create a ${subject} CLI game using ${tools} about ${purpose2} for ${purpose}. (That also shouts out Tom)`,
        `Build a ${subject} CLI about ${purpose} that's only for Flatiron Students! `
      ]


    } else {
      sents = [
        `Make a ${subject} ${keyword_type} using ${tools} for ${purpose}`,
        `A ${subject} ${keyword_type} using ${tools} about ${purpose2} for ${purpose}. (That also shouts out Tom)`,
        `Build a ${subject} ${keyword_type} about ${purpose} that's only for Flatiron Students! `,
        `Make a ${keyword_type} Tom related!`,
        `Develop a ${subject} website about ${purpose} and ${purpose3}`
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
        <div class="d-md-flex h-md-100 align-items-center">
        	<div class="col-md-6 p-0 bg-blue h-md-100">
        		<div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">


                 <div className="filter">
                     <h1 class="title">Ask Tom</h1>
                   <p>Choose your Mod (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ </p>
                   <div class="select-dropdown" >
                     <select onChange={(e) => this.changeFilterTerm(e.target.value)} >
                       <option name="mod" value="1">Mod 1</option>
                       <option name="mod" value="2">Mod 2</option>
                       <option name="mod" value="3">Mod 3</option>
                       <option name="mod" value="4">Mod 4</option>
                       <option name="mod" value="5">Mod 5</option>
                     </select>
                   </div>
                     <br/>
                     <br/>
                   <button class="btn btn-primary" onClick={() => this.clickGenerateIdea()} type="submit" name="Submit">Generate an Idea</button>


                 </div>




        		</div>

        	</div>
        	<div class="col-md-6 p-0 bg-white h-md-100 loginarea">
        		<div class="ideas d-md-flex align-items-center h-md-100 p-5 justify-content-center">

        		<IdeaCard newIdea={this.state.newIdea} mod={this.state.filterTerm}/>


        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
// export default withRouter{ Home };