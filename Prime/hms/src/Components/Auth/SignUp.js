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
          <div class="auth">
          <div class="container">
          <h3>Housify</h3>
              <div id="auth-row" class="row justify-content-center align-items-center">
                  <div id="auth-column" class="col-md-5">
                      <div id="auth-box" class="col-md-11">
                        <form class="form">
                          
                          <h3 class="text-center text-info">Signup</h3>

                          <div class="form-group">
                            <FormGroup bsSize="large" class="row justify-content-center align-items-center text-info from-control">
                                <FormControl
                                  autoFocus
                                  type="text"
                                  placeholder ="First Name"
                                  //text ="Email"
                                  //value={email}
                                  //onChange={e=> setEmail(e.target.value)}
                                  />
                            </FormGroup>
                          </div>

                          <div class="form-group">
                            <FormGroup bsSize="large" class="row justify-content-center align-items-center text-info from-control">
                                <FormControl
                                  type="text"
                                  placeholder ="Last Name"
                                // value={password}
                                  //onChange={e=> setPassword(e.target.value)}
                                  />
                            </FormGroup>
                            </div>

                            <div class="form-group">
                            <FormGroup bsSize="large" class="row justify-content-center align-items-center text-info from-control">
                                <FormControl
                                  type="email"
                                  placeholder ="Email"
                                // value={password}
                                  //onChange={e=> setPassword(e.target.value)}
                                  />
                            </FormGroup>
                            </div>
                        
                          <div class="form-group">
                            <FormGroup bsSize="large" class="row justify-content-center align-items-center text-info from-control">
                                <FormControl
                                  type="password"
                                  placeholder ="Password"
                                // value={password}
                                  //onChange={e=> setPassword(e.target.value)}
                                  />
                            </FormGroup>
                            </div>

                        <Button class="btn btn-info btn-md"  type="submit" name="Login">
                          Signup
                        </Button>        
                        <br />
                          <div class="links">
                            <Link to="/Login" className="fc">
                              <h6 class="text-info">Already a User? Login </h6>         
                            </Link>
                            <Link to="/ForgotPassword">          
                              <h6 class="text-info">Forgot you password?</h6>         
                            </Link>     
                          </div>  
                        </form>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          );
    }
}
 
export default SignUp;