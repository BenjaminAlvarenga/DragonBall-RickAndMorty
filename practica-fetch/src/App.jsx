
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import DragonBall from "./pages/DragonBall.jsx"

function App() {

  return (
    <>
    <Router>
        <Nav />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dragon' element={<DragonBall/>}></Route>
          </Routes>
    </Router>
    </>
  )
}

export default App
