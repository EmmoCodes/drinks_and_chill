import React from 'react'
import { Link } from 'react-router-dom'

function DrinksItem({ drink }) {
  return (
    <>
      <Link to={`/details/${drink.idDrink}`}>
        <div>
          <img className="drink_list_img" src={drink.strDrinkThumb} alt="" />
          <h2 className="drink_list_name">{drink.strDrink}</h2>
        </div>
      </Link>
    </>
  )
}

export default DrinksItem
