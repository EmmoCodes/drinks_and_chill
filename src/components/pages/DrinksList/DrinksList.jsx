import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiLink } from '../../../utils/Api/Api'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks'
import DrinksItem from '../../DrinksItems/DrinksItem.jsx'

function DrinksList() {
  const [drinks, setDrinks] = useState([])

  const ingredient = useParams().ingredient

  useEffect(() => {
    getAllDrinks(`${apiLink}/filter.php?${ingredient}`, setDrinks)
  }, [])

  console.log(drinks)

  if (!ingredient) {
    return <p>is Loading...</p>
  }

  return (
    <section>
      {drinks.map(drink => (
        <DrinksItem key={drink.idDrink} drink={drink} />
      ))}
    </section>
  )
}

export default DrinksList
