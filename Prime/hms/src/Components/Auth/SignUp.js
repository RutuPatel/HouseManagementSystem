import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect , Link }  from 'react-router-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            
        <div className="SignUp">       
        <form>
          <FormGroup>
            <h1> SignUp </h1>
          </FormGroup>
          <FormGroup bsSize="large">
            <FormControl
              autoFocus
              type="text"
              placeholder ="First Name"
              //text ="Email"
              //value={email}
              //onChange={e=> setEmail(e.target.value)}
              />
        </FormGroup>
        <FormGroup bsSize="large">
            <FormControl
              autoFocus
              type="Text"
              placeholder ="Last Name"
              //text ="Email"
              //value={email}
              //onChange={e=> setEmail(e.target.value)}
              />
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

        <Button  type="submit" name="Register">
            Register
        </Button>
        <Link to="/Login"> 
         <h6>Aready Registered?Login</h6>
            
        </Link>
       
        </form>
      </div>
          );
    }
}
 
export default SignUp;