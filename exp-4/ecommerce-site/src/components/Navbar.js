import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/">E-Commerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-3"> {/* Adds margin to the right */}
              <Link className="nav-link" to="/"><b>Home</b></Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/products"><b>Products</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><b>Cart</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
