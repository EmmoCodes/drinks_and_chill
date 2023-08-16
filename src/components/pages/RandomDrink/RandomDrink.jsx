import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RandomDrink() {
  const [randomDrink, setRandomDrink] = useState([])

  const randomDrinkId = useParams().random

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(response => response.json())
      .then(response => console.log(setRandomDrink(response.drinks)))
  }, [])
  console.log(randomDrink)
  if (!randomDrinkId) {
    return <p>is Loading...</p>
  }
  return (
    <div>
      <h1>random drink</h1>
    </div>
  )
}

export default RandomDrink
