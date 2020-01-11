import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"


class Login extends Component{
  render(){
      return(
        <div className="Login">
        <form>
          <FormGroup>
            <h1> Login </h1>
          </FormGroup>
        <FormGroup bsSize="large">
            <FormControl
              autoFocus
              type="Email"
              placeholder ="Email"
              //text ="Email"
              //value={email}
              //onChange={e=> setEmail(e.target.value)}
              />
        </FormGroup>

        <FormGroup bsSize="large">
            <FormControl
              type="password"
              placeholder ="Password"
             // value={password}
              //onChange={e=> setPassword(e.target.value)}
              />
        </FormGroup>

        <Button block bsSize="large" type="submit">
          Login
        </Button>

        </form>
      </div>
      )
  }
} 

export default Login;