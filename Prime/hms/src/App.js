import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Auth/Dashboard";
import SignUp from "./Components/Auth/SignUp";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Reset from "./Components/Auth/Reset";
import Thanks from "./Components/Auth/Thankyou";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">      
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Reset" component={Reset}/>
            <Route exact path="/Thanks" component={Thanks}/>
            <Route exact path="/ForgotPassword" component={ForgotPassword}/>
            <Route exact path ="/Dashboard" component={Dashboard}/>
      </div>
      </Router>
    )
  }
}

export default App;