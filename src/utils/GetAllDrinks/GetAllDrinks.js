export const getAllDrinks = (apiLink, setState, key) => {
  fetch(apiLink)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => (key ? setState(response[key]) : setState(response)))
    .catch(error => console.log(error.message))
}
