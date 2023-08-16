import React from 'react'

function DrinksItem({ drink }) {
  return (
    <div>
      <img className="drink_list_img" src={drink.strDrinkThumb} alt="" />
      <h2 className="drink_list_name">{drink.strDrink}</h2>
    </div>
  )
}

export default DrinksItem
