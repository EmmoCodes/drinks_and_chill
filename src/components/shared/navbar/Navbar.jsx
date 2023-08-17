import './Navbar.scss'
import homeIcon from '../../../assets/images/home.png'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchContext.jsx'
import { getAllDrinks } from '../../../utils/GetAllDrinks/GetAllDrinks.js'
import { apiLink } from '../../../utils/Api/Api.js'

const Navbar = () => {
  const [searchedDrink, setSearchedDrink] = useState([])

  const { searchInput, handleSearchInput } = useContext(SearchContext)

  const searchInputFetch = event => {
    event.preventDefault()

    getAllDrinks(`${apiLink}/search.php?s=${searchInput}`, setSearchedDrink, '0')
  }

  return (
    <section className="navbar">
      <div>
        <h2>DRINKS & CHILL</h2>
        <Link to="/">
          <img src={homeIcon} alt="Home Icon" />
        </Link>
      </div>
      <h1>Cocktails & Getränke!</h1>
      <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
      <article>
        <form>
          <input onChange={handleSearchInput} type="text" name="inp_user" id="inp_user" placeholder="type something" />
          <button onClick={searchInputFetch}>Search</button>
        </form>
      </article>
      <Link className="searched_cocktail" to={`/searched/${searchedDrink.strDrink}`}>
        <h2>{searchedDrink.strDrink}</h2>
      </Link>
    </section>
  )
}

export default Navbar
