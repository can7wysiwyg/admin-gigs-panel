import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/pages/Header"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"

function App() {
  return(<>
  <Router>

  <Header />
  <main className="container py-3">
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />

  </Routes>
  </main>

  </Router>
  
  
  </>)
}

export default App