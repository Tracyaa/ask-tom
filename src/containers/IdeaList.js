import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter';
import IdeaCard from '../components/IdeaCard'
import FavoriteList from '../containers/FavoriteList'

class IdeaList extends Component {

  state = {
    ideas: [],
    favIdeas: [],
  }

  componentDidMount() {
    adapter.getIdea()
    .then(resp => resp.json())
    .then(ideas => {
      this.setState({
        ideas
      }, () => this.omgFav())
    })

  }

  omgFav = () => {
    adapter.getSavedIdeas()
    .then(resp => resp.json())
    .then(userIdeas => userIdeas.filter(userIdea => userIdea.user_id === this.props.currentUser.user.id))
    .then(favIdeas => favIdeas.map(idea => idea.idea_id))
    .then(ideaIdArray => {
      let favIdeas = (this.state.ideas.filter(idea => ideaIdArray.includes(idea.id)))
      this.setState({
        favIdeas
      })
    })
  }

  clickToFavorites = (user_id, idea_id) => {
    let idArray = this.state.favIdeas.map(idea => idea.id)
     if (!idArray.includes(idea_id)) {
      adapter.postSavedIdea(user_id, idea_id)
      let idea = this.state.ideas.find(idea => idea.id === idea_id)
      this.setState({
        favIdeas: [idea, ...this.state.favIdeas]
      })
    }
  }

  removeFromFav = (user_id, id_idea) => {
    adapter.getSavedIdeas()
    .then(res => res.json())
    .then(favs => {
      return favs.find(fav => fav.idea_id === id_idea)
    })
    .then(fav => {
      fetch(`http://dry-shelf-10302.herokuapp.com/api/v1/user_ideas/${fav.id}`, {method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    })
  }


  // removeFromFav = (user_id, id_idea) => {
  //   console.log(user_id, id_idea);
  //   this.deleteFav(id_idea)
  //   let foundFav = this.deleteFav(id_idea)
  //   fetch(`http://dry-shelf-10302.herokuapp.com/api/v1/user_ideas/${foundFav.id}`, {method: 'DELETE'})
  //   .then(res => res.json())
  //   .then(fav => {
  //     console.log(fav);
  //   })
  // }

  render() {

    const ideaCards = this.state.ideas.map(idea => <IdeaCard clickToFavorites={this.clickToFavorites} currentUser={this.props.currentUser} key={idea.id} idea={idea}/>)
    return (
      <div className="idea-list">


          <div className="d-md-flex h-md-100 align-items-center">
          	<div className="col-md-6 p-0 bg-blue h-md-100">
          		<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center idea-c">
                <h1 className="title">All Ideas</h1>
                <ul className="idea-ul">
                {ideaCards}
                </ul>
          		</div>
          	</div>

            <FavoriteList removeFromFav={this.removeFromFav} favIdeas={this.state.favIdeas} currentUser={this.props.currentUser} />

          </div>
        </div>

    );
  }
};

export default IdeaList;
