const KEYWORD_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/keywords/1'
// const BASE_URL = "http://dry-shelf-10302.herokuapp.com/api/v1/ideas"
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

// const patchOptions = (newSubject, newKeyword_type, newPurpose) => {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     subject: newSubject,
//     keyword_type: newKeyword_type,
//     purpose: newPurpose
//   })
// }


const adapter = {
  getTool: () => fetch(TOOL_BASE_URL).then(res => res.json()),
  getKeyword: () => fetch(KEYWORD_BASE_URL).then(res => res.json()),
  patchKeyword: (newSubject, newKeyword_type, newPurpose) => fetch(KEYWORD_BASE_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      subject: newSubject,
      keyword_type: newKeyword_type,
      purpose: newPurpose
    })
  }),
  getIdea: () => fetch(IDEA_BASE_URL),
  postIdea: (obj) => fetch(IDEA_BASE_URL, postOptions(obj)).then(res => res.json())
}
export default adapter
