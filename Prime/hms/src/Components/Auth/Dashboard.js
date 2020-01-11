import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect , Link }  from 'react-router-dom';
import {FormControl, Button, FormGroup} from 'react-bootstrap';
import "./Auth.css"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
               
        <div className="Dashboard">        
            <h1>Welcome to Dashboard</h1>
      </div>
         );
    }
}
 
export default Dashboard;