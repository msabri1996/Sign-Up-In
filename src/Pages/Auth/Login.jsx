import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Credential } from '../../Models/Credentials';
import "../../Styles/login.css"
import AxiosClient from '../../Tools/Axios';

const Login = () => {
  
  // get data using useRef  
  const emailRef = useRef();
  const passwordRef = useRef();

  //state
  const [error, setError] = useState("");

  //router 
  const navTo = useNavigate()

  const handleSubmitLogin = (e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;

    if(!email || !pass){
        alert("empty values sorry 😿")
    }
    
        AxiosClient.post("/auth/login",new Credential(email,pass))
                   .then(response=>{
                       setError("")
                       console.log(response.data.msg)
                       navTo('/home')
                   })
                   .catch(errServer=>setError(errServer.response?.data.msg))

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  return (
      <form action="" className="sign-in" onSubmit={handleSubmitLogin}>
          <h2 className='title'>Sign In</h2>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" ref={emailRef} placeholder='email' onFocus={() => setError("")} />
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" ref={passwordRef} placeholder='password' onFocus={() => setError("")} />
          </div>
          <div className={error ? "alert alert-danger ":"d-none"} role="alert">
                 {error}
          </div>
          <input className="btn btn-primary login" type="submit" value="Login"/>
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

  )
}

export default Login
