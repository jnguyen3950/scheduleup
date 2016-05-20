import React from "react";
import { Link } from "react-router";

export default class Login extends React.Component {
  render() {
    return (
      <form id="login-form" method="post">
        <div class="form-group">
          <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username"/>
        </div>
        <div class="form-group">
          <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
        </div>
        <div class="form-group text-center">
          <input type="checkbox" tabindex="3" class="" name="remember" id="remember"/>
          <label for="remember"> Remember Me</label>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <Link to="calender"><input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In"/></Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
