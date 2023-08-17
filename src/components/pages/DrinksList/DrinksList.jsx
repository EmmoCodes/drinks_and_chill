import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiLink } from '../../../utils/Api/Api'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks'
import DrinksItem from '../../DrinksItems/DrinksItem.jsx'
import './DrinksList.scss'
import Navbar from '../../shared/navbar/Navbar'
import Footer from '../../shared/footer/Footer'
import NavbarDetails from '../../shared/NavbarDetails/NavbarDetails.jsx'

function DrinksList() {
  const [drinks, setDrinks] = useState([])

  const { ingredient } = useParams()

  useEffect(() => {
    if (ingredient === 'random.php') {
      getAllDrinks(`${apiLink}/${ingredient}`, setDrinks)
    } else {
      getAllDrinks(`${apiLink}/filter.php?${ingredient}`, setDrinks)
    }
  }, [])

  if (!ingredient) {
    return <p>is Loading...</p>
  }

  return (
    <section className="drink_list">
      {drinks.map(drink => (
        <DrinksItem key={drink.idDrink} drink={drink} />
      ))}
      <NavbarDetails />
      <Footer />
    </section>
  )
}

export default DrinksList
