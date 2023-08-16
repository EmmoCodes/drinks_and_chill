import './Home.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
      <Link to="cocktails/gin">
        <article className="home_gin">
          <h2>Gin</h2>
          <p>Wacholder-geprägter Kräuter-Spirituose</p>
        </article>
      </Link>
      <article className="home_vodka">
        <h2>Vodka</h2>
        <p>Klar, neutral, vielseitig einsetzbar</p>
      </article>
      <article className="home_rum">
        <h2>Rum</h2>
        <p>Zuckerrohr-basiert, karibisch, vielfältig aromatisch</p>
      </article>
      <article className="home_scotch">
        <h2>Scotch</h2>
        <p>Rauchig, schottischer Whisky-Klassiker</p>
      </article>
      <article className="home_alkoholfrei">
        <h2>Alkoholfrei</h2>
        <p>Ohne Alkohol, erfrischend, vielfältig</p>
      </article>
      <article className="home_zufall">
        <h2>Zufall</h2>
        <p>Unvorhersehbar, ungeplant, überraschend</p>
      </article>
    </section>
  )
}

export default Home
