
import Login from "./Login";
import Panel from "./Panel";
import Register from "./Register";
import "../../Styles/registerlogin.css"

function RegisterLogin() {

  return (
    <div className="content">
        <div className="forms-container">
          <div className="signin-up">
            <Login/>
            <Register/>
          </div>
        </div>
        <Panel/>
    </div>
  );
}

export default RegisterLogin;
