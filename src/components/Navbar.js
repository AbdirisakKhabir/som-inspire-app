import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-0 py-2 shadow">
        <div className="container-xl max-w-screen-xl">
          {/* <!-- Logo --> */}
          <Link className="navbar-brand" href="#">
            <img
              src="https://preview.webpixels.io/web/img/logos/clever-dark.svg"
              className="h-8"
              alt="..."
            />
          </Link>
          {/* <!-- Navbar toggle --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* <!-- Nav --> */}
            <ul className="navbar-nav mx-lg-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-item nav-link active centerNavbar p-2 fw-bold w-100"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link centerNavbar p-2 fw-bold"
                  to="#about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link centerNavbar p-2 fw-bold" to="">
                  Donate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link centerNavbar p-2 fw-bold" to="">
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* <!-- Right navigation --> */}
            <div className="navbar-nav ms-lg-4">
              <NavLink
                className="btn btn-outline p-2 mx-2 fw-bold"
                to="/loginForm"
              >
                Sign in
              </NavLink>
            </div>
            {/* <!-- Action --> */}
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <NavLink
                to="/registerForm"
                className="btn btn-sm-8 btn-dark w-full w-lg-auto p-2 fw-bold "
              >
                Create Account
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
