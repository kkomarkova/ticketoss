import ResponsiveMenu from "react-responsive-navbar";
import { Close } from "styled-icons/material/Close";
import { Menu } from "styled-icons/material/Menu";
import "./index.css";
import React, { useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../store/actions/auth";
import { clearResponse } from "../../store/actions/response";


const NewNavbar = (props) => {
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
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <header className="header">
      <div className="wrap">
        <header className="logo">
          <h1 className="logo-title">
            <Link to={"/"} className="navbar-brand p-4">
                ticketoss
              </Link>
          </h1>
        </header>
        <nav className="menu">
          <ResponsiveMenu
            menuOpenButton={
              <div className="menu hamburger-menu menu-btn">
                <svg viewBox="0 0 24 24" height="32" width="32" aria-hidden="true" focusable="false" fill="currentColor" class="sc-bxivhb hRGQkb" size="32"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                <Menu img="" size={32} />
              </div>
            }
            menuCloseButton={
              <div className="menu hamburger-menu menu-btn">
              <svg viewBox="0 0 24 24" height="32" width="32" aria-hidden="true" focusable="false" fill="currentColor" class="sc-htpNat jiJFSw" size="32"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>                <Close size={32} />
              </div>
            }
            changeMenuOn="768px"
               menu={
                <ul className="menu-list">
                {currentUser ? (
                   <>
                      <li className="menu-item is-active menu-item--play">
                        <a href="#" className="menu-link" onClick={logOut}>
                          LogOut
                        </a>
                      </li><li className="menu-item is-active menu-item--play">
                        <a href="/profile" className="menu-link">
                          Profile
                        </a>
                      </li><li className="menu-item is-active menu-item--play">
                        <a href="/alltickets" className="menu-link">
                          Tickets
                        </a>
                      </li></>
                 ) : (
                    <>
                      <li className="menu-item is-active menu-item--play btn btn primary menu-link">
                        <Button size="small" component={Link} className="nav-link" to={"/login"}>Login</Button>
                      </li><li className="menu-item is-active menu-item--play btn btn primary menu-link">
                        <Button variant="contained" component={Link} size="small" className="nav-link-signup" to="/register">Sign Up</Button>
                      </li></>
                 )}
                 </ul>
               }
          />
        </nav>
      </div>
    </header>
  );
}; 
export default NewNavbar;
