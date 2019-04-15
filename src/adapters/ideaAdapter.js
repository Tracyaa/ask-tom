const BASE_URL = "http://dry-shelf-10302.herokuapp.com/api/v1/ideas"

const ideaAdapter = {
  getIdeas: () => fetch(BASE_URL),
  postIdea: (ideaObj) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(ideaObj)
  })
}

export default ideaAdapter;
