// import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Profile from "../Profile.comp";
import { connect } from "react-redux";
import { createStore } from "redux";
import { useDispatch } from "react-redux";

const Header = (props) => {
  // const disPatch = useDispatch();
  const logOutHandler = () => {
    props.dispatch({
      type: "LOGOUT",
    });
  };
  console.log("header", props.isLogin);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            {props.count === 0 ? "Cart is empty!" : props.count}
          </a>
          {props.isLogin ? (
            <Link to="/profile">
              <img src="https://img.icons8.com/small/32/000000/user-male-circle.png" />
            </Link>
          ) : null}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success m-1" type="submit">
              Search
            </button>

            {/* { props.islogin ? 
            <>
            (<Link to="/">
                <button
                  type="button"
                  class="btn btn-primary btn-sm m-2"
                  onClick={logOutHandler}
                >
                  LOG OUT
                </button> 
              </Link>) 
               :
                (<Link to="/login">

                  <button type="button" class="btn btn-primary btn-sm m-2">
                    LOG IN
                  </button>
                </Link>
                <Link to="/register">
                  <button type="button" class="btn btn-secondary btn-sm m-2">
                    SIGN UP
                  </button>
                </Link>)
                </>
            }
               */}
            {props.isLogin ? (
              <>
                <Link to="/">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm m-2"
                    onClick={logOutHandler}
                  >
                    LOG OUT
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button type="button" class="btn btn-primary btn-sm m-2">
                    LOG IN
                  </button>
                </Link>
                <Link to="/register">
                  <button type="button" class="btn btn-secondary btn-sm m-2">
                    SIGN UP
                  </button>
                </Link>
              </>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default connect((state) => {
  return {
    isLogin: state.isLogin,
  };
})(Header);
