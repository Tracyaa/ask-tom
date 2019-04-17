const KEYWORD_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/keywords/6'
const TOOL_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/tools'
const IDEA_BASE_URL = 'https://dry-shelf-10302.herokuapp.com/api/v1/ideas'
const SAVED_LIST_BASE_URL = "https://dry-shelf-10302.herokuapp.com/api/v1/user_ideas"

const postOptions = (obj) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(obj)
  }
}
const patchOptions = (newSubject, newKeyword_type, newPurpose) => {
  return {
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
  }
}

const postUserIdea = (user_id, idea_id) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: user_id,
      idea_id: idea_id
    })
  }
}



const adapter = {
  getTool: () => fetch(TOOL_BASE_URL).then(res => res.json()),
  getKeyword: () => fetch(KEYWORD_BASE_URL).then(res => res.json()),
  patchKeyword: (newSubject, newKeyword_type, newPurpose) => fetch(KEYWORD_BASE_URL, patchOptions(newSubject, newKeyword_type, newPurpose)),
  getIdea: () => fetch(IDEA_BASE_URL),
  postIdea: (obj) => fetch(IDEA_BASE_URL, postOptions(obj)).then(res => res.json()),
  getSavedIdeas: () => fetch(SAVED_LIST_BASE_URL),
  postSavedIdea: (user_id, idea_id) => fetch(SAVED_LIST_BASE_URL, postUserIdea(user_id, idea_id)),
}

export default adapter