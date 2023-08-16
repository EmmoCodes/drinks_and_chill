import React from 'react'
import './DrinksItem.scss'

function DrinksItem({ drink }) {
  return (
    <div className="drinks_item">
      <img className="drink_list_img" src={drink.strDrinkThumb} alt="" />
      <h2 className="drink_list_name">{drink.strDrink}</h2>
    </div>
  )
}

export default DrinksItem
