import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const AppRoutes = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/registerlogin" element={<Register/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes
