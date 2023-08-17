import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiLink } from '../../../utils/Api/Api'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks'
import DrinksItem from '../../DrinksItems/DrinksItem.jsx'
import './DrinksList.scss'
import NavbarMobile from '../../shared/navbarMobile/NavbarMobile'

function DrinksList() {
  const [drinks, setDrinks] = useState([])

  const ingredient = useParams().ingredient

  useEffect(() => {
    getAllDrinks(`${apiLink}/filter.php?${ingredient}`, setDrinks)
  }, [])

  if (!ingredient) {
    return <p>is Loading...</p>
  }

  return (
    <section className="drink_list">
      {drinks.map(drink => (
        <DrinksItem key={drink.idDrink} drink={drink} />
      ))}
      <NavbarMobile />
    </section>
  )
}

export default DrinksList
