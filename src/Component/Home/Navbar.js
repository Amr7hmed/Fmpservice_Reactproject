import React from 'react';
import Logonav from '../image/logo.jpg';
import {NavLink,Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <img src={Logonav} className="logonav"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
          <li className="nav-item">
              <NavLink to="/" className="nav-link" exact>
                    Create
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Search
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <NavLink to="/searchreceipt" className="dropdown-item" exact>
                      Receipt Number
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/searchdevice" className="dropdown-item" exact>
                      Device Serial
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/searchnumber" className="dropdown-item" exact>
                      Number Phone
                  </NavLink>
                </li>
              </ul>
            </li>





            
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hardware Cases
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <NavLink to="/examinationstage" className="dropdown-item" exact>
                  Examination Stage
              </NavLink>
            </li>
            <li>
              <NavLink to="/reformstage" className="dropdown-item" exact>
                  Reform Stage
              </NavLink>
            </li>
            <li>
              <NavLink to="/finalexaminationstage" className="dropdown-item" exact>
                  Final Examination Stage
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/repaired" className="dropdown-item" exact>
                  Repaired
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  
  </div>
</nav>)
}

export default Navbar;
/*
fixed-top
*/
