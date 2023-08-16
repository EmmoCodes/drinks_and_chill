import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Footer from './components/shared/footer/Footer'
import './App.scss'
import DrinksList from './components/pages/DrinksList/DrinksList.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails/:ingredient" element={<DrinksList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
