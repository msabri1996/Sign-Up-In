import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import RegisterLogin from '../Pages/Auth/RegisterLogin'
import HomePage from '../Pages/Website/Home'


const AppRoutes = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/registerlogin" element={<RegisterLogin/>}/>
              <Route path="/home" element={<HomePage/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes
