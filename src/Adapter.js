const url = "https://api.github.com/users/"

class Adapter {

  static getProfile(userInput){
    return fetch(url+userInput)
    .then(resp => {
      if (!!resp.ok){
        return resp.json()
      }
      throw Error(resp.status)
    })
    .catch(err => err)
  }

}

export default Adapter
