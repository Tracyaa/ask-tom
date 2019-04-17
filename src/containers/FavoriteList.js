import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter';
import IdeaCard from '../components/IdeaCard'


class FavoriteList extends Component {

  state = {
    savedIdeas: []
  }

  componentDidMount() {
    adapter.getSavedIdeas()
      .then(resp => resp.json())
      .then(userIdeas => {
        this.setState({
          savedIdeas: userIdeas
        })
      })
  }

  currentUserFavList = () => {
    let favIdeas = this.state.savedIdeas.filter(idea => idea.user_id === this.props.currentUser.id)
    let ideaIdArray = favIdeas.map(idea => idea.idea_id)
    let oh = this.props.ideas.filter(idea => ideaIdArray.includes(idea.id))
    return oh
  }

  render() {

    const favCards = this.currentUserFavList().map(idea => <IdeaCard key={idea.id} idea={idea} />)
    return (

      <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
    		<div className="ideas d-md-flex align-items-center h-md-100 p-5 justify-content-center idea-c">
           <h1 className="favorite-title">Saved Ideas</h1>
          <ul className="favorite-ul">
          {favCards}
          </ul>
    		</div>
    	</div>

    );
  }
};

export default FavoriteList;