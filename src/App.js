import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home.component.js";
import Login from "./components/login.component.js";
import CreateUser  from "./components/user.create.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Home}>
          <Route path="*" component={Login} status={401}/>
        </Route>
        <Route path="/user/create" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;