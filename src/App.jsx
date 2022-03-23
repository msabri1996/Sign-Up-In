
import Login from "./Components/Login";
import Panel from "./Components/Panel";
import Register from "./Components/Register";
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
