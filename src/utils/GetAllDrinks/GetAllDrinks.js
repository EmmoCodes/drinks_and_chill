export const getAllDrinks = (apiLink, setState) => {
  fetch(apiLink)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => setState(response.drinks))
    .catch(error => console.log(error.message))
}
