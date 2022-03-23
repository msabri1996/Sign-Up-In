import React from 'react'
import desk from "../Images/desk.svg"
import login from "../Images/login.svg"
import "../Styles/panel.css"

const Panel = () => {
    
    const handleClickUp = ()=>{
        const container = document.querySelector(".content");
        container.classList.add("sign-up-mode");       
    }
    
    const handleClickIn = ()=>{
        const container = document.querySelector(".content");
        container.classList.remove("sign-up-mode");       
    }

    

    return (
      <div className="panels-container">
          <div className="panel left-panel">
            <div className="content1">
              <h3>New Here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse beatae iste.</p>
              <button className="btn tranparent" id="sign-up-btn" onClick={handleClickUp}>Sign Up</button>
            </div>
            <img src={login} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content1">
              <h3>New Here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse beatae iste.</p>
              <button className="btn tranparent" id="sign-in-btn" onClick={handleClickIn}>Sign In</button>
            </div>
            <img src={desk} className="image" alt="" />
          </div>
        </div>
    
  )
}

export default Panel
