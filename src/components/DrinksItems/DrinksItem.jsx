import React from 'react'
import { Link } from 'react-router-dom'
import './DrinksItem.scss'

function DrinksItem({ drink }) {
  return (
    <>
      <Link className="drinks_item_link" to={`/details/${drink.idDrink}`}>
        <div className="drinks_item">
          <img className="drink_list_img" src={drink.strDrinkThumb} alt="" />
          <h2 className="drink_list_name">{drink.strDrink}</h2>
        </div>
      </Link>
    </>
  )
}

export default DrinksItem
