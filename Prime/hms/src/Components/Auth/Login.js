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
        <div class="auth">
          <div class="container">
            
            <div id = "header">
            <h1>Housify</h1>
            </div>

              <div id="auth-row" class="row justify-content-center align-items-center">
                  <div id="auth-column" class="col-md-5">
                      <div id="auth-box" class="col-md-11">                      
                        <form class="form">
                          
                          <h3 class="text-center text-info">Login</h3>

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

                        <Button class="btn btn-info btn-md"  type="submit" name="Login">
                          Login
                        </Button>        
                        <br />
                          <div class="links">
                            <Link to="/SignUp" className="fc">
                              <h6 class="text-info">New User? SignUp </h6>         
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

export default Login;