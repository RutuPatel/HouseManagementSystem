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
       
        // <h1> House Management System </h1>
        // <h3 class="text-center text-white pt-5"> Login </h3>
        <div>
          <div class="container">
              <div id="login-row" class="row justify-content-center align-items-center">
                  <div id="login-column" class="col-md-6">
                      <div id="login-box" class="col-md-12 back">
                        <form class="form">
                          <FormGroup>
                            <h1> House Management System </h1>
                            {/* <h3 class="text-center text-white pt-5"> Login </h3> */}
                          </FormGroup>
                          
                          <h3 class="text-center text-info text-color">Login</h3>

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

                          <div class= "form-group">
                          <Button class="btn btn-info btn-md button"  type="submit" name="Login">
                              Login
                            </Button>
                          </div>
                                    
                        <Link to="/SignUp">
                          <h6 class="text-info link-text">New User ? SignUp </h6>         
                        </Link>
                        <Link to="/ForgotPassword">          
                          <h6 class="text-info">Forgot you passowrd?</h6>         
                        </Link>       
                        </form>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      );
  }
} 

export default Login;