import { Route, Routes } from 'react-router-dom'

import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/footer/Footer'

import './App.scss'
import DrinksList from './components/pages/DrinksList/DrinksList'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DrinksList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
