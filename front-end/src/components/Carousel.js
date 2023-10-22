import React, { useState } from "react";
import avator from "../assets/templates/template1 (1).png";
import "./css/Carousel.css";
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="center">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div
            className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}
          >
            <img src={avator} className="d-block w-100" alt="Slide 1" />
          </div>
          <div
            className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}
          >
            <img src={avator} className="d-block w-100" alt="Slide 2" />
          </div>
          <div
            className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}
          >
            <img src={avator} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => handleSlideChange((currentSlide - 1 + 3) % 3)} // Wrap around to the last slide
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next w-25"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => handleSlideChange((currentSlide + 1) % 3)} // Wrap around to the first slide
        >
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
