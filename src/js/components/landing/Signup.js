import React from "react";
import { Link } from "react-router";

export default class Signup extends React.Component {
  render() {
    return (
      <form id="register-form" method="post">
        <div class="form-group">
          <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value=""/>
        </div>
        <div class="form-group">
          <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value=""/>
        </div>
        <div class="form-group">
          <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
        </div>
        <div class="form-group">
          <input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password"/>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <Link to="calender"><input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now"/></Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
