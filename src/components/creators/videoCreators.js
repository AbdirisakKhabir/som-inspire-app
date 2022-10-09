import React, { useState } from "react";
import { getData } from "../../fakeData";

const VideoCreators = () => {
  const [data, setData] = useState(getData);

  return (
    <div className="container-xxl p-5 d-flex">
      <div className="row justify-content-center mx-4">
        {data.videoCreators.map((creator) => (
          <div className="col-sm-3 my-2" key={creator.title}>
            <div className="card h-100 d-flex p-4">
              <img
                src={creator.img}
                alt={creator.name}
                className="card-img-top w-100"
              />
              <div className="card-body ">
                <h3 className="fw-bold">{creator.name}</h3>
                <p>{creator.description}</p>
                <div className="d-flex justify-content-center">
                  <i className="bi bi-heart"></i>
                  <p className="mx-2">{creator.supporters} supporters</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCreators;
