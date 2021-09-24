// import React from "react";
import React, { useState } from "react";
import RestApi from "./Api";
import { withRouter } from "react-router-dom";
const Registration = (props) => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: ""
  });
  const [userToken , setUserToken] = useState('');

  const inputHnadler = (e) => {
    let data = userDetails;
    if (e.target.name === "name") {
      data.userName = e.target.value;
    } else if (e.target.name === "email") {
      data.email = e.target.value;
    } else if (e.target.name === "password") {
      data.password = e.target.value;
    } else if (e.target.name === "cpassword") {
      data.confirmPassword = e.target.value;
    } else if (e.target.name === "pnumber") {
      data.phoneNumber = e.target.value;
    } else if (e.target.name === "address") {
      data.address = e.target.value;
    }
    setUserDetails(data);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log(userDetails);
    let params = {
      student_name: userDetails.userName,
      student_email: userDetails.email,
      password : userDetails.password,
      student_address: userDetails.address,
      student_contact: userDetails.phoneNumber

    };
RestApi.registration(params)
.then(resp => {console.log("reg" , resp)
 setUserToken(resp.data.success.token)
 props.history.push('/login')
}
)
  };
  
  // console.log(new);
 
  return (
    <div>
      <h1> SIGN UP </h1>
      <div className="w3-container">
        <span className="w3-center w3-animate-left"> I don't have an account </span>
      </div>
      <form onSubmit={SubmitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => inputHnadler(e)}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => inputHnadler(e)}
            placeholder="Enter email"
          />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            onChange={(e) => inputHnadler(e)}
            placeholder="Enter password"
          />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail4"
            aria-describedby="emailHelp"
            name="cpassword"
            onChange={(e) => inputHnadler(e)}
            placeholder="Confirm password"
          />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail5"
            aria-describedby="emailHelp"
            name="address"
            onChange={(e) => inputHnadler(e)}
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword6"
            name="pnumber"
            onChange={(e) => inputHnadler(e)}
            placeholder="Phone number"
          />
        </div>
        <br />
        {/* <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
  </div> */}
        <button type="submit" className="btn btn-dark btn-sm">
          Register
        </button>
      </form>
    </div>
  );
};
const newApp = withRouter(Registration);
export default newApp;
