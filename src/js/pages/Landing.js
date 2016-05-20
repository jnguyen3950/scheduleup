import React from "react";
import { Link } from "react-router";

import Login from "../components/landing/Login";
import Signup from "../components/landing/Signup";

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
      signup: false,
    }
  }

  toggleLogin() {
    const login = true;
    const signup = false;

    this.setState({login});
    this.setState({signup});
  }

  toggleSignup() {
    // const signup = !this.state.signup;
    // this.setState({signup});

    const login = false;
    const signup = true;

    this.setState({login});
    this.setState({signup});
  }

  render() {
    const { login } = this.state;
    const { signup } = this.state;
    const loginClass = login ? "" : "hidden";
    const signupClass = signup ? "" : "hidden";

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-6">
                    <a href="#" class="active" id="login-form-link" onClick={this.toggleLogin.bind(this)}>Login</a>
                  </div>
                  <div class="col-xs-6">
                    <a href="#" id="register-form-link" onClick={this.toggleSignup.bind(this)}>Register</a>
                  </div>
                </div>
                <hr/>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class={loginClass}>
                      <Login/>
                    </div>
                    <div class={signupClass}>
                      <Signup/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
