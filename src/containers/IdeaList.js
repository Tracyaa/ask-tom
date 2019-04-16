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






          <div class="d-md-flex h-md-100 align-items-center">
          	<div class="col-md-6 p-0 bg-blue h-md-100">
          		<div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                <h1 class="title">All Ideas</h1>
                <ul>
            {ideaCards}

</ul>

          		</div>

          	</div>
          	<div class="col-md-6 p-0 bg-white h-md-100 loginarea">
          		<div class="ideas d-md-flex align-items-center h-md-100 p-5 justify-content-center">

          		<h3> Favorites !</h3>


          		</div>
          	</div>
          </div>
        </div>

    );
  }
};

export default IdeaList;