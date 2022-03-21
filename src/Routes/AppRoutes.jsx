import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'

const AppRoutes = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes
