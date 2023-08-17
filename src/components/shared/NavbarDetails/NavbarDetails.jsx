import React, { useContext } from 'react'
import homeIcon from '../../../assets/images/home.png'
import { Link, useNavigate } from 'react-router-dom'
import backIcon from '../../../assets/images/back.png'
import './NavbarDetails.scss'
import Lupe from '../../../assets/images/lupe.png'
import { SearchContext } from '../../context/SearchContext.jsx'

function NavbarDetails() {
  const navigate = useNavigate()
  return (
    <nav className="sticky_navbar">
      <img onClick={() => navigate(-1)} src={backIcon} alt="" />
      <p>Drinks&Chill</p>
      <Link to="/">
        <img src={homeIcon} alt="Home Icon" />
      </Link>
    </nav>
  )
}

export default NavbarDetails
