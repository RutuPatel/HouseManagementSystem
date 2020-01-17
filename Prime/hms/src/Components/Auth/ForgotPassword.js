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
               
          <div class="auth">
          <div class="container">

              <div id="auth-row" class="row justify-content-center align-items-center">
                  <div id="auth-column" class="col-md-5">
                      <div id="auth-box" class="col-md-11">                      
                        <form class="forgotform">
                          
                          <h3 class="text-center text-info">Forgot Password</h3>

                          <div class="form-group">
                            <FormGroup bsSize="large" class="row justify-content-center align-items-center text-info from-control">
                                <FormControl
                                  autoFocus
                                  type="Email"
                                  placeholder ="Email"
                                  //text ="Email"
                                  //value={email}
                                  //onChange={e=> setEmail(e.target.value)}
                                  />
                            </FormGroup>
                          </div>
                        
                        <Button class="btn btn-info btn-md"  type="submit" name="continue">
                          Continue
                        </Button>          
                        </form>
                      </div>
                  </div>
                </div>
            </div>
          </div>
         );
    }
}
 
export default ForgotPassword;