
import Login from "./Login";
import Panel from "./Panel";
import Register from "./Register";
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
