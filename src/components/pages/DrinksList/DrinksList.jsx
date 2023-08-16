import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiLink } from '../../../utils/Api/Api'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks'
import DrinksItem from '../../DrinksItems/DrinksItem.jsx'
import './DrinksList.scss'
import Navbar from '../../shared/navbar/Navbar'
import Footer from '../../shared/footer/Footer'

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
      <Navbar />
      {drinks.map(drink => (
        <DrinksItem key={drink.idDrink} drink={drink} />
      ))}
      <Footer />
    </section>
  )
}

export default DrinksList
