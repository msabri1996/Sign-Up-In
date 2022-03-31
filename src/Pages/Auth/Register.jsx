import React, { useRef, useState } from 'react'
import { UserModel } from '../../Models/UserModel';
import "../../Styles/register.css"
import AxiosClient from '../../Tools/Axios';

const Register = () => {
  const fullnameRef = useRef();
  const avatarRef = useRef();
  const emailRef = useRef()
  const passwordRef = useRef()
  const rpasswordRef = useRef()
  
  // useState for errors
  const [error,setError] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    let data ={
        name : fullnameRef.current.value,
        avatar : avatarRef.current.value,
        email : emailRef.current.value,
        password : passwordRef.current.value,
        rpassword : rpasswordRef.current.value
    }

    // Init the value of error to false
    let error=false;

    // Check if the inputs are not empty
    Object.keys(data).forEach(t=>{
        if(data[t]==="") error=true
    })

    if(error){
        alert("empty values 😞")
    }
    else if(data.password !== data.rpassword){
        alert("password doesn't match the repeated password 😞")
    }
    
        let registerInfos = new UserModel(
            null,
            data.name,
            data.email,
            `https://api.multiavatar.com/${data.avatar}`,
            data.password,
            data.rpassword
        )
        AxiosClient.post("/auth/register",registerInfos)
                   .then(response=>{
                       setError("")
                       alert(response.data.msg)

                   })
                   .catch(err=>{
                       setError(err.response.data.msg)
                   })
                 
    fullnameRef.current.value="";
    avatarRef.current.value="";
    emailRef.current.value="";
    passwordRef.current.value="";
    rpasswordRef.current.value="";
    console.log(error)
  }

  return (
      <form action="" onSubmit={handleSubmit} className="sign-up">
          <h2 className='title'>Sign Up</h2>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder='Full Name' ref={fullnameRef} onFocus={()=>{setError("")}}/>
          </div>
          <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder='Avatar ? Optionnel' ref={avatarRef} onFocus={()=>{setError("")}}/>
          </div>
          <div className="input-field">
              <i className="fa fa-envelope"></i>
              <input type="text" placeholder='Email' ref={emailRef} onFocus={()=>{setError("")}}/>
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder='Password' ref={passwordRef}  onFocus={()=>{setError("")}}/>
          </div>
          <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder='Repeated password' ref={rpasswordRef}  onFocus={()=>{setError("")}}/>
          </div>
          <div className={error ? "alert alert-danger ":"d-none"} role="alert">
                 {error}
          </div>
          <input className="btn btn-primary register" type="submit" value="Sign up"/>
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

export default Register
