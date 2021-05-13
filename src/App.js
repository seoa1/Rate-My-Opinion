import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react';
import Home from "./components/home.component.js";
import Login from "./components/login.component.js";
import CreateUser  from "./components/user.create.component";
import CreatePost from "./components/post.create.component";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
    }

  }


  
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/user/create" component={CreateUser}/>
          <Route path="/posts/create" component={CreatePost}/>
        </div>
      </Router>
    );
  }
}

