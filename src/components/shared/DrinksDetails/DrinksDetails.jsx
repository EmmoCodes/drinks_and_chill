import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks.js'
import { apiLink } from '../../../utils/Api/Api.js'

function DrinksDetails() {
  const [drinkDetails, setDrinkDetails] = useState({})

  const detailId = useParams().id

  useEffect(() => {
    getAllDrinks(`${apiLink}/lookup.php?i=${detailId}`, setDrinkDetails, '0')
  }, [])

  if (!detailId) {
    return <p>Is Loading ....</p>
  }
  console.log(drinkDetails)

  return <section></section>
}

export default DrinksDetails
