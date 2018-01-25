import React from 'react';
import { NavLink } from 'react-router-dom'

const MainFooter = (props) => {
  return (
    <footer className="text-light bg-dark">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md">
            <h4>Mahidol Vivax Research Unit</h4>
            <p>3rd Floor 50th Anniversary<br />
              Chalermprakiat Building,<br />
              Faculty of Tropical Medicine,<br />
              Mahidol  University<br />
              420/6  Ratchawithi  Road, Rachathewi<br />
              Bangkok  10400 Thailand</p>

            <p>Phone​  +66 2354 9100 ext. 2020,<br />
              +66 23069187<br />
              Fax. +66 2354 8051</p>
          </div>
          <div className="col-12  col-md">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className="nav-link">News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/publications" className="nav-link">Publications</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/students" className="nav-link">Students &amp; Alumni</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/careers" className="nav-link">Work &amp; Study</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faq" className="nav-link">FAQ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-between align-items-center" >
          <div className="col-6 text-left" >
            <img src="http://via.placeholder.com/200x200" style={{maxHeight: "60px"}} alt="Featured News" className="d-inline img-thumbnail rounded-circle mr-3 my-3" />
            <h4 className="d-inline">Mahidol University</h4>
          </div>
          <div className="col-6">
          <p className="text-right m-0"><small>&copy; MVRU {new Date(Date.now()).getFullYear()}</small></p>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
}

export default MainFooter;