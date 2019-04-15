const BASE_URL = "http://localhost:3001/ideas/"

const ideaAdapter = {
  getIdeas: () => fetch(BASE_URL).then(resp => resp.json()),
  postIdea: (ideaObj) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(ideaObj)
  })
  // patchIdea: (IdeaId, category) => fetch(`http://localhost:3001/ideas/${id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     ??????
  //   })
}

export default ideaAdapter;
