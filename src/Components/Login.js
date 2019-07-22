import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, input_change } from "../actions/actionCreators";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Login(props) {
  const { isLoginSuccess } = props;
  const loginUser = e => {
    e.preventDefault();
    props.dispatch(getLogin(props.email, props.pwd));
  };
  const handleChange = name => e => {
    props.dispatch(input_change(name, e.target.value));
  };
  return (
    <div>
      {props.error && alert(props.error)}
      {isLoginSuccess && (
        <div>
          <Redirect to="/brands" />
        </div>
      )}

      <div>
        <center>
          <form name="login">
            <label>Email</label>
            <input
              type="text"
              value={props.email}
              onChange={handleChange("email")}
            />
            <br />
            <label>Password</label>
            <input
              type="text"
              value={props.pwd}
              onChange={handleChange("pwd")}
            />
            <br />
            <button type="submit" onClick={loginUser}>
              Login
            </button>
            <br />
            Please Signup here:
            <Link to={`/signup`}>SignUp</Link>
          </form>
        </center>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    email: state.email,
    pwd: state.pwd,
    isLoading: state.isLoading,
    isLoginSuccess: state.isLoggedInSuccess
  };
}

export default connect(mapStateToProps)(Login);
