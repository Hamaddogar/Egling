import React from "react";
import { Button, Link } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
// import{NavLink} from "react-dom-router";
// import { Face, Fingerprint } from '@material-ui/icons';

import "./style.css";
import Material from "./hhh.jpg";

import { loginUpHandler } from "../../MiddleWare/Login/login";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { NavLink } from "react-router-dom";

class LoginTab extends React.Component {
  state = {
    userEmail: "",
    userPassword: ""
  };

  handleChange = (event) => {
    const userEmail = event.target.value;
    this.setState({ userEmail });
}

handleChange = (event) => {
    const userPassword = event.target.value;
    this.setState({ userPassword });
}
  userEmail = e => {
    this.setState({ userEmail: e.target.value });
  };
  userPassword = e => {
    this.setState({ userPassword: e.target.value });
  };
  LoginHundler = e => {
    e.preventDefault();

    loginUpHandler(this.state.userEmail, this.state.userPassword);
  };

  render() {
    const { classes } = this.props;
    const { userEmail,userPassword } = this.state;
    return (
      <div className="container-fluid" style={{backgroundColor:'black'}}>
      <div className="main">
        <div className="inside" style={{ marginTop: "-20px" }}>
          <br/>
          <LockOpenIcon/>
          <p style={{fontFamily:'initial',fontSize:'19px',marginTop: '-7px'}}>Login</p>
          
        </div>
        <ValidatorForm
                style={{marginTop:'3%'}}
                ref="form"
                onSubmit={this.LoginHundler}
                onError={errors => console.log(errors)}
            >
        <div className="first">
                <TextValidator
                    label="Email"
                    onChange={this.userEmail}
                    name="email"
                    value={userEmail}
                    type="text" 
                    id="username"
                    validators={['required', 'isEmail']}
                    errorMessages={['Email is required', 'Email is not valid']}
                />
</div>
        <div className="first">
            <TextValidator
                    label="Password"
                    onChange={this.userPassword}
                    name="password"
                    value={userPassword}
                    type="text"
                    id="pass"
                    validators={['required']}
                    errorMessages={['Password is required']}
                />
{/*      
          </p> */}
        </div>

        <Button 
          style={{
            backgroundColor: "#00CED5",
            color: "white",
            height: "33px",
            marginLeft: "15%",
            marginTop: "3%",
            width: "69%"
          }}
          type="submit"
        >
          Login
        </Button>
      
        </ValidatorForm>
      </div>
      <div className="left">
          <img src={Material} alt="no" style={{height:'600px',width:'100%'}}/>
      </div>
      </div>
    );
  }
}

export default LoginTab;
