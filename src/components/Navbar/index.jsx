import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "../../styles/Style";
import { logout } from "../../store/actions/auth";
import "./index.scss";
import { clearResponse } from "../../store/actions/response";
import Button from '@mui/material/Button';

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
    dispatch(logout()).then(() => {
      props.history.push("/");
      window.location.reload();
    });
  }, [dispatch]);

  return (
    <>
      <Nav className="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={"/"} className="navbar-brand p-4">
                ticketoss
              </Link>
            </li>
          </ul>
        </div>
        {currentUser ? (
          <div className="navbar-collapse collapse w-100 order-1 dual-collapse2">
            <ul class="navbar-nav ml-auto">
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
              <li className="nav-item">
                <a href="/alltickets" className="nav-link">
                  Explore Tickets
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item btn btn primary">
              <Button size="small" component={Link} className="nav-link" to={"/login"}>Login</Button>
                {/* <Link to={"/login"} className="nav-link">
                  Login
                </Link> */}
              </li>

              <li className="nav-item btn btn primary">
              <Button variant="contained" component={Link} size="small" className="nav-link-signup" to="/register">Sign Up</Button>
                {/* <Link to={"/register"} className="nav-link-signup">
                  Sign Up
                </Link> */}
              </li>
            </ul>
          </div>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
