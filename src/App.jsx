
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./Styles/app.css"
import desk from "./Images/desk.svg"
import login from "./Images/login.svg"



function App() {
  const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
  return (
    <div className="container-fluid content-login">
      <div className="signin-up">
        <Login/>
        <Register/>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse beatae iste.</p>
              <button className="btn tranparent" id="sign-up-btn">Sign Up</button>
            </div>
            <img src={login} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>New Here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse beatae iste.</p>
              <button className="btn tranparent" id="sign-in-btn">Sign In</button>
            </div>
            <img src={desk} className="image" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
