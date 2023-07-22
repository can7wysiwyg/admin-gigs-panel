import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/pages/Header"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import AdminPanel from "./components/pages/AdminPanel"
import MyTutors from "./components/pages/MyTutors"
import Users from "./components/pages/Users"
import Categories from "./components/pages/Categories"
import UserProfile from "./components/pages/UserProfile"

function App() {
  return(<>
  <Router>

  <Header />
  <main className="container py-3">
  <Routes>
    <Route path="/" element={<Home />} />
  <Route path="/admin_panell" element={<AdminPanel />} />
  <Route path="/login" element={<Login />} />
  <Route path="/tutors" element={<MyTutors />} />
  <Route path="/users" element={<Users />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/user_profile/:id" element={<UserProfile />} />
  

  </Routes>
  </main>

  </Router>
  
  
  </>)
}

export default App