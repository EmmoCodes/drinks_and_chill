import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks.js'
import { apiLink } from '../../../utils/Api/Api.js'
import NavbarDetails from '../NavbarDetails/NavbarDetails.jsx'

function DrinksDetails() {
  const [drinkDetails, setDrinkDetails] = useState({})

  const detailId = useParams().id

  useEffect(() => {
    getAllDrinks(`${apiLink}/lookup.php?i=${detailId}`, setDrinkDetails, '0')
  }, [])

  if (!detailId) {
    return <p>Is Loading ....</p>
  }

  return (
    <section className="details_section">
      <h1>{drinkDetails.strDrink}</h1>
      <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} />
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
      <p>{drinkDetails.strInstructionsDE}</p>
      <NavbarDetails />
    </section>
  )
}

export default DrinksDetails
