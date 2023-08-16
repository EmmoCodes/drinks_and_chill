import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Footer from './components/shared/footer/Footer'
import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
