import React from "react";
import "../../Styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-flex">
        <div className="container-fluid">
            <a className="navbar-brand" href="https://api.multiavatar.com/Majdouline">
              <img src="https://api.multiavatar.com/Majdouline" alt="" style={{width:20,height:20}}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Tasks</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Pomodoro</a>
                </li>
            </ul>
            <form className="d-flex flex-row">
                <input className="form-control me-2" type="text" placeholder="Search" />
                <button className="btn btn-danger" type="button">Search</button>
            </form>
            </div>
        </div> 
    </nav>

  );
};

export default Navbar;
