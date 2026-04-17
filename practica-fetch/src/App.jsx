
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import DragonBall from "./pages/DragonBall.jsx"
import RickAndMorty from "./pages/RickAndMorty.jsx"

function App() {

  return (
    <>
    <Router>
        <Nav />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dragon' element={<DragonBall/>}></Route>
            <Route path='/rickandmorty' element={<RickAndMorty/>}></Route>
          </Routes>
    </Router>
    </>
  )
}

export default App
