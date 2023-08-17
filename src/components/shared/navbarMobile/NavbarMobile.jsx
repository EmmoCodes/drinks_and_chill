import React from 'react'
import homeIcon from '../../../assets/images/home.png'
import { Link, useNavigate } from 'react-router-dom'
import backIcon from '../../../assets/images/back.png'
import './NavbarMobile.scss'
import Lupe from '../../../assets/images/lupe.png'

function NavbarMobile() {
  const navigate = useNavigate()
  return (
    <nav className="sticky_navbar">
      <img onClick={() => navigate(-1)} src={backIcon} alt="" />
      <img src={Lupe} />
      <Link to="/">
        <img src={homeIcon} alt="Home Icon" />
      </Link>
    </nav>
  )
}

export default NavbarMobile
