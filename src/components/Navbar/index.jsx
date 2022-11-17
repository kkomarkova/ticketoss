import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Nav,
} from "../../styles/Style";
import { logout } from "../../store/actions/auth";
import { clearResponse } from "../../store/actions/response";

const Navbar = (props) => {
  

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  var location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearResponse()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout())
      .then(() => {
        props.history.push("/");
        window.location.reload();
    });
  }, [dispatch]);


  return (
    <>
      <Nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Ticket Resale
        </Link>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                 {currentUser.email}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
            <li className="nav-item">
              <a href="/profile" className="nav-link">
                My profile
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
