import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import './App.scss'
import DrinksList from './components/pages/DrinksList/DrinksList.jsx'
import DrinksDetails from './components/shared/DrinksDetails/DrinksDetails.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails/:ingredient" element={<DrinksList />} />
        <Route path="/details/:id" element={<DrinksDetails />} />
      </Routes>
    </>
  )
}

export default App
