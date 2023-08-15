import './Navbar.scss'
import homeIcon from '../../../assets/images/home.png'

const Navbar = () => {
  return (
    <section className="navbar">
      <div>
        <h2>DRINKS & CHILL</h2>
        <img src={homeIcon} alt="Home Icon" />
      </div>
      <h1>Cocktails & Getränke!</h1>
      <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
      <form>
        <input type="text" name="inp_user" id="inp_user" placeholder="type something" />
        <button>Search</button>
      </form>
    </section>
  )
}

export default Navbar
