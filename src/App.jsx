import { Route, Routes } from 'react-router-dom'
import './App.scss'
import DrinksList from './components/pages/DrinksList/DrinksList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DrinksList />} />
      </Routes>
    </>
  )
}

export default App
