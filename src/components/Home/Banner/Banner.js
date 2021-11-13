import React from "react";
import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";

const Banner = () => {
  return (
    <div className="container">
      {/* banner */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="d-block w-100" alt={one} />
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-100" alt={two} />
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100" alt={three} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
