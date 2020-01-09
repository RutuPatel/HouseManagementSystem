import React, { Component } from 'react';
//import {BrowserRouter, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Auth/Dashboard";

// export default class App extends Component{
//   render(){
//     return(
//       <div className ="app">
//         <BrowserRouter>
//         <Switch>
//           <Route exact path={"/"} Component={Login}/>
//           <Route exact path ={"/dashboard"} Component={Dashboard}/>
//         </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default App;