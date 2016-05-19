import React from "react";
import { Link } from "react-router";

import Login from "../components/landing/Login";
import Signup from "../components/landing/Signup";

export default class Landing extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-6">
                    <a href="#" class="active" id="login-form-link">Login</a>
                  </div>
                  <div class="col-xs-6">
                    <a href="#" id="register-form-link">Register</a>
                  </div>
                </div>
                <hr/>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-lg-12">
                    <Login/>
                    <Signup/>
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
