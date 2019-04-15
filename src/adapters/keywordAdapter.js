const BASE_URL = "http://dry-shelf-10302.herokuapp.com/api/v1/keywords/"

const keywordAdapter = {
  getKeywords: () => fetch(BASE_URL),

  patchKeyword: (newSubject, newKeyword_type, newPurpose) => fetch(BASE_URL + `${1}`, {
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
  })
}

export default keywordAdapter;