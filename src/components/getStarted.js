import React from "react";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="container-xxl shadow bg-dark mb-5 p-5">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <h1 className="fw-bolder text-light mt-3 mb-4">
            - To make Donation Account for your Project -
          </h1>
          <NavLink className="p-2 btn btn-light bg-light fw-bold rounded-pill w-50">
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
