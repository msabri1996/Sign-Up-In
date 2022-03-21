import React from 'react'
import "../Styles/register.css"

const Register = () => {
  return (
    <div className='signup'>
      <form action="" className="sign-up">
          <h2 className='title'>Sign In</h2>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder='First Name' />
          </div>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder='Last Name' />
          </div>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder='Avatar ? Optionnel' />
          </div>
          <div className="input-field">
              <i className="fa fa-envelope"></i>
              <input type="text" placeholder='Email' />
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder='Password' />
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder='Repeated password' />
          </div>
          <input class="btn btn-primary register" type="submit" value="Sign up"/>
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

export default Register
