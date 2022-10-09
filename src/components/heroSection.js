import React from "react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-32 mt-5">
      <div className="container-lg max-w-screen-xl">
        {/* <!-- Theme title --> */}
        <div className="row g-6 align-items-center">
          <div className="col-lg-7 mx-auto text-lg-center">
            {/* <!-- Title --> */}
            <h1 className="ls-tight font-bolder display-4 mb-7">
              Creativity powered by membership
            </h1>
            {/* <!-- Text --> */}
            <p className="lead mb-12">
              Plan, build and launch beautiful and consistent user interfaces
              for the web that drives meaningful engagement and growth for your
              brand.
            </p>
            {/* <!-- Form --> */}
            <form className="w-2/3 mx-auto">
              <div className="rounded px-2 py-2 border shadow">
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="form-control pl-3 shadow-none bg-transparent border-0"
                      placeholder="Find Creator"
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-block btn-dark">
                      Find Creator
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
