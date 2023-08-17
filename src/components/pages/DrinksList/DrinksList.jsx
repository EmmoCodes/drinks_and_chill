import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiLink } from '../../../utils/Api/Api'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks'
import DrinksItem from '../../DrinksItems/DrinksItem.jsx'
import './DrinksList.scss'

import NavbarMobile from '../../shared/navbarMobile/NavbarMobile'
import { SearchContext } from '../../context/SearchContext.jsx'

function DrinksList() {
  const [drinks, setDrinks] = useState([])
  const { ingredient } = useParams()
  const { searchInput, handleSearchInput } = useContext(SearchContext)

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      getAllDrinks(`${apiLink}/filter.php?${ingredient}`, setDrinks)
      if (searchInput !== '') {
        getAllDrinks(`${apiLink}/search.php?f=${searchInput}`, setDrinks)
      }
    }, 300)
    return () => {
      clearTimeout(searchTimeout)
    }
  }, [searchInput])

  if (!ingredient) {
    return <p>is Loading...</p>
  }

  return (
    <section className="drink_list">
      {drinks.map(drink => (
        <DrinksItem key={drink.idDrink} drink={drink} />
      ))}

      <NavbarMobile key={drinks.idDrink} drinks={drinks} />
    </section>
  )
}

export default DrinksList
