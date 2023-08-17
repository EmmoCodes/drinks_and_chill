import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks.js'
import { apiLink } from '../../../utils/Api/Api.js'
import NavbarDetails from '../NavbarDetails/NavbarDetails.jsx'
import './searchedDrink.scss'

function SearchedDrink() {
  const [searchedDrink, setSearchedDrink] = useState([])

  const drinkName = useParams().name

  useEffect(() => {
    getAllDrinks(`${apiLink}/search.php?s=${drinkName}`, setSearchedDrink, '0')
  }, [])

  if (!searchedDrink) {
    ;<p>Is Loading....</p>
  }

  return (
    <>
      <section
        className="searched_drink"
        style={{ background: `center/cover no-repeat url("${searchedDrink.strDrinkThumb}")` }}>
        <div>
          <h1>{searchedDrink.strDrink}</h1>
          <h2>Zutaten</h2>
          <ul style={{ display: 'absolute' }}>
            <li>{searchedDrink.strIngredient1}</li>
            <li>{searchedDrink.strIngredient2}</li>
            <li>{searchedDrink.strIngredient3}</li>
            <li>{searchedDrink.strIngredient4}</li>
            <li>{searchedDrink.strIngredient5}</li>
            <li>{searchedDrink.strIngredient6}</li>
            <li>{searchedDrink.strIngredient7}</li>
            <li>{searchedDrink.strIngredient8}</li>
            <li>{searchedDrink.strIngredient9}</li>
            <li>{searchedDrink.strIngredient10}</li>
            <li>{searchedDrink.strIngredient11}</li>
            <li>{searchedDrink.strIngredient12}</li>
            <li>{searchedDrink.strIngredient13}</li>
            <li>{searchedDrink.strIngredient14}</li>
            <li>{searchedDrink.strIngredient15}</li>
          </ul>
          <h3>{searchedDrink.strInstructionsDE}</h3>
        </div>
      </section>
      <NavbarDetails />
    </>
  )
}

export default SearchedDrink
