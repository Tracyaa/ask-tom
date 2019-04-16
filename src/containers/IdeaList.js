import React, {
  Component
} from 'react';
import adapter from '../adapters/adapter';
import IdeaCard from '../components/IdeaCard'


class IdeaList extends Component {

  state = {
    ideas: []
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
    const ideaCards = this.state.ideas.map(idea => <IdeaCard idea={idea}/>)
    return (
      <div className="idea-list">
        {ideaCards}
      </div>
    );
  }
};

export default IdeaList;