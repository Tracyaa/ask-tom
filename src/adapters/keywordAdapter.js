const BASE_URL = "http://localhost:3001/keywords/"

const keywordAdapter = {
  getKeywords: () => fetch(BASE_URL).then(resp => resp.json()),
  postKeyword: (keywordObj) => fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(keywordObj)
  })
}

export default keywordAdapter;
