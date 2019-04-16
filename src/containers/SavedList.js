import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter';
import IdeaCard from '../components/IdeaCard'


class SavedList extends Component {

  state = {
    savedIdeas: []
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

  updateIdeaList = () => {

  }

  render() {
    console.log(this.state.ideas)
    const ideaCards = this.state.ideas.map(idea => <IdeaCard idea={idea}/>)
    return (
      <div className="idea-list">
        {ideaCards}
      </div>
    );
  }
};

export default SavedList;
