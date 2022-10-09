import React from "react";
import { NavLink, Link } from "react-router-dom";
import VideoCreators from "./creators/videoCreators";
const CenterNavbar = () => {
  return (
    <div className="container-xxl mt-5 mb-2">
      <h1>- Explore Creators - </h1>
      <nav className="navbar navbar-expand-lg navbar-light px-0 py-2">
        <div className="container-xxl max-w-screen-xl">
          {/* <!-- Nav --> */}
          <ul className="navbar-nav mx-lg-auto">
            <li className="nav-item fs-5 centerNavbar p-1">
              <NavLink className="nav-item nav-link active" to="/videoCreators">
                Video Creators
              </NavLink>
            </li>
            <li className="nav-item fs-5 centerNavbar p-1">
              <NavLink className="nav-link" to="/developers">
                Developers
              </NavLink>
            </li>
            <li className="nav-item fs-5 centerNavbar p-1">
              <NavLink className="nav-link" to="/writers">
                Writers
              </NavLink>
            </li>
            <li className="nav-item fs-5 centerNavbar p-1">
              <NavLink className="nav-link" to="/poscasters">
                Podcasters
              </NavLink>
            </li>
            <li className="nav-item fs-5 centerNavbar p-1">
              <NavLink className="nav-link" to="/journalists">
                Journalists
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <VideoCreators /> */}
    </div>
  );
};

export default CenterNavbar;
