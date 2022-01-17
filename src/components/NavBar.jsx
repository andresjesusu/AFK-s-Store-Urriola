import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget.jsx";




const NavBar = () => {
  const styleHeader = {
    backgroundColor: "",
    fontFamily: "Arial",
    color: "Grey",
    fontSize: "30",
  };
  return (
    <Fragment>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div class="container">

        <h1 style={styleHeader}>AFK's Store  </h1>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              PS4
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              PS5
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              STEAM
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              PC
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              ACCESORIOS
            </a>
          </li>
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
      <CartWidget/>
      </div>
      </nav>
    </Fragment>
    
  );
};

export default NavBar;
