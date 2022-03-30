
import Login from "./Pages/Auth/Login";
import Panel from "./Pages/Auth/Panel";
import Register from "./Pages/Auth/Register";
import "./Styles/app.css"

function App() {

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

export default App;
