import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect , Link}  from 'react-router-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"


class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {  
     }   
  }
 
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
        <Button  type="submit" name="Login">
          Login
        </Button>        
        <Link to="/SignUp">
          <h6>New User ? SignUp </h6>         
        </Link>
        <Link to="/ForgotPassword">          
          <h6>Forgot you passowrd?</h6>         
        </Link>       
        </form>
      </div>
      );
  }
} 

export default Login;