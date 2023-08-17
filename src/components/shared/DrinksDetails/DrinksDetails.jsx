import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks.js'
import { apiLink } from '../../../utils/Api/Api.js'
import NavbarDetails from '../NavbarDetails/NavbarDetails.jsx'
import './DrinksDetails.scss'

function DrinksDetails() {
  const [drinkDetails, setDrinkDetails] = useState({})

  const detailId = useParams().id

  useEffect(() => {
    if (detailId === 'random.php') {
      getAllDrinks(`${apiLink}/${detailId}`, setDrinkDetails, '0')
    } else {
      getAllDrinks(`${apiLink}/lookup.php?i=${detailId}`, setDrinkDetails, '0')
    }
  }, [])

  if (!detailId) {
    return <p>Is Loading ....</p>
  }

  return (
    <section
      style={{ background: `center/cover no-repeat url("${drinkDetails.strDrinkThumb}")` }}
      className="drinks_details">
      <div>
        <h1>{drinkDetails.strDrink}</h1>
        <h2>Zutaten</h2>
        <ul style={{ display: 'absolute' }}>
          <li>{drinkDetails.strIngredient1}</li>
          <li>{drinkDetails.strIngredient2}</li>
          <li>{drinkDetails.strIngredient3}</li>
          <li>{drinkDetails.strIngredient4}</li>
          <li>{drinkDetails.strIngredient5}</li>
          <li>{drinkDetails.strIngredient6}</li>
          <li>{drinkDetails.strIngredient7}</li>
          <li>{drinkDetails.strIngredient8}</li>
          <li>{drinkDetails.strIngredient9}</li>
          <li>{drinkDetails.strIngredient10}</li>
          <li>{drinkDetails.strIngredient11}</li>
          <li>{drinkDetails.strIngredient12}</li>
          <li>{drinkDetails.strIngredient13}</li>
          <li>{drinkDetails.strIngredient14}</li>
          <li>{drinkDetails.strIngredient15}</li>
        </ul>
        <h3>{drinkDetails.strInstructionsDE}</h3>
      </div>
      <NavbarDetails />
    </section>
  )
}

export default DrinksDetails
