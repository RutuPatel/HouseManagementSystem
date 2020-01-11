import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect , Link }  from 'react-router-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"

class Thanks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
               
        <div className="Thanks">        
        <form>
          <FormGroup>
            <h1> you have successfully reset your Password please try to login now</h1>
          </FormGroup>
          <Link to="/Login"> 
            <Button  type="submit" name="Login">
             Login
            </Button>
          </Link>
        </form>
      </div>
         );
    }
}
 
export default Thanks;