import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Credential } from '../Models/Credentials';
import "../Styles/login.css"
import AxiosClient from '../Tools/Axios';

const Login = () => {
  
  // get data using useRef  
  const usernameRef = useRef();
  const passwordRef = useRef();

  //state
  const [error, setError] = useState("");

  //router 
  const navTo = useNavigate()

  const handleSubmitLogin = (e)=>{
    e.preventDefault();
    const user = usernameRef.current.value;
    const pass = passwordRef.current.value;

    if(!user || !pass){
        alert("empty values sorry 😿")
    }
    else{
        AxiosClient.post("/auth/login",new Credential(user,pass))
                   .then(response=>{
                       setError("")
                       navTo('/home')
                   })
                   .catch(errServer=>setError(errServer.response.data.msg))
    }
  }
  return (
      <form action="" className="sign-in" onSubmit={handleSubmitLogin}>
          <h2 className='title'>Sign In</h2>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" ref={usernameRef} placeholder='username' onFocus={() => setError("")} />
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" ref={passwordRef} placeholder='password' onFocus={() => setError("")} />
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
