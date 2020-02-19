import React from "react";
import { connect } from "react-redux";
import styles from "./Login.scss";

const Login = () => {
  return (
    <div>
    <form>
      <div className="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname"  />
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
      </div>
    </form>
  </div>
  )
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
