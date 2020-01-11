import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect , Link }  from 'react-router-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
               
        <div className="Forgot Password">        
        <form>
          <FormGroup>
            <h1> Forgot Passowrd </h1>
          </FormGroup>
        <FormGroup bsSize="large">
            <FormControl
              autoFocus
              type="Email"
              placeholder ="Enter Your registered Email address"
              //text ="Email"
              //value={email}
              //onChange={e=> setEmail(e.target.value)}
              />
        </FormGroup>


        <Button  type="submit" name="ForgotPassword">
            send Reset Link
        </Button>       
        </form>
      </div>
         );
    }
}
 
export default ForgotPassword;