import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter';
import IdeaCard from '../components/IdeaCard'
import FavoriteList from '../containers/FavoriteList'
import IdeaListFilter from '../components/IdeaListFilter'

class IdeaList extends Component {

  state = {
    ideas: [],
    filteredIdeas: []
  }

  componentDidMount() {
    adapter.getIdea()
      .then(resp => resp.json())
      .then(ideas => {
        this.setState({
          ideas
        })
      })
  }

  clickToFavorites = (user_id, idea_id) => {
    adapter.postSavedIdea(user_id, idea_id)
  }

  handleChange = (e) => {
    e.preventDefault()

    const filteredIdeas = this.state.ideas.filter(idea => idea.mod === parseInt(e.target.value))
    this.setState({
      filteredIdeas
    })
  }

  render() {

    const ideaCards = this.state.ideas.map(idea => <IdeaCard clickToFavorites={this.clickToFavorites} currentUser={this.props.currentUser} key={idea.id} idea={idea}/>).reverse()
    const filteredIdeaCards = this.state.filteredIdeas.map(idea => <IdeaCard clickToFavorites={this.clickToFavorites} currentUser={this.props.currentUser} key={idea.id} idea={idea}/>).reverse()

    return (
      <div className="idea-list">


          <div className="d-md-flex h-md-100 align-items-center">
          	<div className="col-md-6 p-0 bg-blue h-md-100">
          		<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center idea-c">
                <div className="filter">
                  <h1 className="title">All Ideas</h1>
                  <IdeaListFilter handleChange={this.handleChange} />
                </div>
                <ul className="idea-ul">
                {filteredIdeaCards.length > 0 ? filteredIdeaCards : ideaCards}
                </ul>
          		</div>
          	</div>

            <FavoriteList ideas={this.state.ideas} currentUser={this.props.currentUser} />

          </div>
        </div>

    );
  }
};

export default IdeaList;
