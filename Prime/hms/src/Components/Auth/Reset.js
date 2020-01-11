import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect , Link }  from 'react-router-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
               
        <div className="Reset Password">        
        <form>
          <FormGroup>
            <h1> Reset Passowrd </h1>
          </FormGroup>
        <FormGroup bsSize="large">
            <FormControl
              autoFocus
              type="text"
              placeholder ="Enter a new Password"
              //text ="Email"
              //value={email}
              //onChange={e=> setEmail(e.target.value)}
              />
        </FormGroup>
        <FormGroup bsSize="large">
            <FormControl
              autoFocus
              type="text"
              placeholder ="Confirm your Password"
              //text ="Email"
              //value={email}
              //onChange={e=> setEmail(e.target.value)}
              />
        </FormGroup>
        <Button  type="submit" name="ResetPassword">
            Reset Password
        </Button>
        </form>
      </div>
         );
    }
}
 
export default ResetPassword;