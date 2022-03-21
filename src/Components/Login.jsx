import React from 'react'
import "../Styles/login.css"
const Login = () => {
  return (
    <div className='signin'>
      <form action="" className="sign-in">
          <h2 className='title'>Sign In</h2>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder='username' />
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder='password' />
          </div>
          <input class="btn btn-primary login" type="submit" value="Login"/>
          <p className="socialtext">Or Sign in with social plateforms</p>
          <div className="social-media">
              <a href="#" className='social-icon'>
                  <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className='social-icon'>
                  <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className='social-icon'>
                  <i className="fab fa-google"></i>
              </a>
              <a href="#" className='social-icon'>
                  <i className="fab fa-linkedin-in"></i>
              </a>
          </div>

      </form>
    </div>
  )
}

export default Login
