import React, { useEffect, useState } from 'react'
import { apiLink } from '../../../utils/Api/Api'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks'

function DrinksList() {
  const [drinks, setDrinks] = useState({})

  useEffect(() => {
    getAllDrinks(`${apiLink}`, setDrinks)
  }, [])

  if (!drinks.drinks) {
    return <p>is Loading...</p>
  }

  console.log(drinks)

  return (
    <div>
      <h1>Liste</h1>
    </div>
  )
}

export default DrinksList
