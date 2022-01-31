import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget.jsx";
import logo from "./logo.png";
import {Link} from 'react-router-dom';

const NavBar = () => {
  const styleHeader = {
    backgroundColor: "",
    fontFamily: "new roman",
    color: "black",
    fontSize: "30",
  };
  return (
    <Fragment>
      <header> <br /><br /><br /> <br />

      <nav class="navbar navbar-expand-sm bg-light navbar-secondary fixed-top border-bottom border-red">
      <div class="container">

       <Link to={"/"}><a href="#"><img style={{ width:"200px"}} src={logo} alt="" /></a></Link> 
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <p style={{color:"black"}}>PS4</p>
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
              <p style={{color:"black"}}>PS5</p>
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
              <p style={{color:"black"}}>Switch</p>
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
              <p style={{color:"black"}}>PC</p>
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
              <p style={{color:"black"}}>ACCESORIOS</p>
            </a>
          </li>
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary" type="button">Search</button>
      </form>
      <CartWidget/>
      </div>
      </nav>
      </header>
    </Fragment>
    
  );
};

export default NavBar;
