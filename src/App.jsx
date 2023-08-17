import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/pages/Home/Home'
import './App.scss'
import DrinksList from './components/pages/DrinksList/DrinksList.jsx'
import DrinksDetails from './components/shared/DrinksDetails/DrinksDetails.jsx'
import { SearchContext } from './components/context/SearchContext.jsx'
import SearchedDrink from './components/shared/SearchedDrink/SearchedDrink.jsx'

function App() {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInput = event => {
    setSearchInput(event.target.value.toLowerCase())
    console.log(searchInput)
  }

  return (
    <SearchContext.Provider value={{ searchInput, handleSearchInput }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails/:ingredient" element={<DrinksList />} />
        <Route path="/details/:id" element={<DrinksDetails />} />
        <Route path="/searched/:name" element={<SearchedDrink />} />
      </Routes>
    </SearchContext.Provider>
  )
}

export default App
