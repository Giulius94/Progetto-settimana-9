import React from 'react';
import Logo from '../assets/logo.png';
import { Search,BellFill,PersonFill } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#221f1f' }}>
      <a className="navbar-brand" href="#">
        <img src={Logo} style={{ width: '100px', height: '55px' }} alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link font-weight-bold" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              My List
            </a>
          </li>
        </ul>
        <div className="d-flex">
        <Search color='white' className='mx-3'/>
        <div id="kids">KIDS</div>
        <BellFill color='white' className='mx-3'/>
        <PersonFill color='white' className='me-3'/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;