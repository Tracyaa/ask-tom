const KEYWORD_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/keywords/1'

const TOOL_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/tools'
const IDEA_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/ideas'

const postOptions = (obj) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }
}
const adapter = {

  getTool: () => fetch(TOOL_BASE_URL).then(res => res.json()),
  getKey: () => fetch(KEYWORD_BASE_URL).then(res => res.json()),
  post: (obj) => fetch(IDEA_BASE_URL, postOptions(obj)).then(res => res.json())
}
export default adapter