import React from 'react';
import { NavLink } from 'react-router-dom'

const MainHeader = (props) => {
    return (
        <header className="masthead">
          <div className="container">
            <h1 className="mt-2 text-muted"><NavLink to="/">MVRU</NavLink></h1>
          </div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <div className="container">
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item">
                    <NavLink to="/about-us" className="nav-link" >About Us <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/capacity" className="nav-link">Our Capacity</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/impact" className="nav-link" >Impact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/people" className="nav-link">People</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/careers" className="nav-link">Work &amp; Study</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
    );
  }

  export default MainHeader;