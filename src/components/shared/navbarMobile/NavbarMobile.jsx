import React, { useContext, useState } from 'react'
import homeIcon from '../../../assets/images/home.png'
import { Link, useNavigate } from 'react-router-dom'
import backIcon from '../../../assets/images/back.png'
import './NavbarMobile.scss'
import Lupe from '../../../assets/images/lupe.png'
import { SearchContext } from '../../context/SearchContext.jsx'

function NavbarMobile({ drinks }) {
  const navigate = useNavigate()

  const { searchInput, handleSearchInput } = useContext(SearchContext)

  const [hideToggle, setHideToggle] = useState(true)

  console.log(searchInput)
  return (
    <nav className="sticky_navbar">
      <img onClick={() => navigate(-1)} src={backIcon} alt="" className={hideToggle ? 'show' : 'hide'} />
      <label htmlFor="search" className="hide"></label>
      <input
        onChange={handleSearchInput}
        className={hideToggle ? 'hide' : 'show search_input '}
        type="text"
        id="search"
        placeholder="Durch Anfangsbuchstaben Filtern"
        maxLength={1}
      />
      <img
        src={Lupe}
        onClick={() => {
          setHideToggle(prevState => !prevState)
        }}
        alt="lupe"
      />
      <Link to="/">
        <img src={homeIcon} alt="Home Icon" className={hideToggle ? 'show' : 'hide'} />
      </Link>
    </nav>
  )
}

export default NavbarMobile
