import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import RestApi from "./Api";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FormDeatils: {
        email: "",
        password: "",
      },
    };
    console.log("login",props);
  }
   
  emailHandler = (e) => {
    let { FormDeatils } = this.state;
    FormDeatils.email = e.target.value;
    this.setState({ FormDeatils });
    // CONSOLE THE RESULT FOR GETTING EMAIL
    // console.log(FormDeatils.email);
  };
  passwordHandler = (e) => {
    let { FormDeatils } = this.state;
    FormDeatils.password = e.target.value;
    this.setState({ FormDeatils });
    // CONSOLE THE RESULT FOR GETTING EMAIL
    // console.log(FormDeatils.password);
  };
  FormHandler = (e) => {
    e.preventDefault();
    let data = {
      student_email: this.state.FormDeatils.email,
      password: this.state.FormDeatils.password,
    };

    if (
      this.state.FormDeatils.email === "" ||
      this.state.FormDeatils.password === ""
    ) {
      alert("please! fill your Credentials correctly");
    } else {
      RestApi.login(data).then((resp) => {
        console.log(resp.data.data);
        let user = {
          name: resp.data.data.data.student_name,
          email: resp.data.data.data.student_email,
          address: resp.data.data.data.student_address,
          contact: resp.data.data.data.student_contact,
          profile: resp.data.data.data.student_profile,
          token: resp.data.data.token,
        };
        this.props.dispatch({
          type: "LOGIN", 
          payload: user
        })
        localStorage.setItem('user', JSON.stringify(user));

        // this.props.setUser(user);
        // this.setState({ formDetails: { email: "", password: "" } });
        // this.props.setIsLogin(true);
        // console.log("LOGED IN", this.props.isLogin);
      });
          this.props.history.push('/')
    }
   
  };

  render() {
    // console.log("zzzz",this.props.userDetails);
    return (
      <div>
        <h2>Sign In</h2>
        <span> sign in with your email and Password</span>
        <form onSubmit={this.FormHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={this.emailHandler}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={this.passwordHandler}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Sign In
          </button>
          <Link to="/register">
            <button type="submit" className="btn btn-info btn-sm m-2">
              Register
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
export default connect(function(state) {
  return {
    isLogin: state.isLogin, userDetails: state.userDetails
  }
})(Login);
