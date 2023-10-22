import React, { useState, useEffect } from "react";
import avator from "../assets/templates/template1 (1).png";
import "./css/Carousel.css";
import auido_temp from "../assets/audio_samples/music1.mp3";

function Carousel({ slide, audioRefs }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (slideIndex) => {
    audioRefs[currentSlide].pause();
    audioRefs[slideIndex].play();
    audioRefs[slideIndex].currentTime = 0;
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    return () => {
      audioRefs[currentSlide].pause();
      audioRefs[currentSlide].currentTime = 0;
    };
  }, [audioRefs, currentSlide]);

  const totalSlides = slide.length;
  return (
    <div className="center">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {slide.map((slide, i) => {
            return (
              <div
                className={`carousel-item ${
                  currentSlide === i ? "active" : ""
                }`}
                key={i}
              >
                <img
                  src={slide.src}
                  className="d-block w-100"
                  alt={slide.alt}
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange((currentSlide - 1 + totalSlides) % totalSlides)
          }
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
          onClick={() =>
            handleSlideChange((currentSlide + 1 + totalSlides) % totalSlides)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
