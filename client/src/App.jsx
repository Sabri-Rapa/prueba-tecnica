import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeView from './views/HomeView'
import CardsView from './views/CardsView'

function App() {
  
  return (
   <>
    <Routes>
      <Route path="/" element={<HomeView />}/>
      <Route path="/characters" element={<CardsView />}/>
    </Routes>
   </>
  )
}

export default App
