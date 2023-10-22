import Carousel from "../components/Carousel";
import "./css/Present.css";
import Slide1 from "../assets/background_images/Slide1.JPG";
import Slide2 from "../assets/background_images/Slide2.JPG";
import Slide3 from "../assets/background_images/Slide3.JPG";
import Slide4 from "../assets/background_images/Slide4.JPG";
import Slide5 from "../assets/background_images/Slide5.JPG";
import Slide6 from "../assets/background_images/Slide6.JPG";
import Slide7 from "../assets/background_images/Slide7.JPG";
import Slide8 from "../assets/background_images/Slide8.JPG";
import Slide9 from "../assets/background_images/Slide9.JPG";
import Slide10 from "../assets/background_images/Slide10.JPG";
import audio1 from "../assets/audio_samples/audio1.mp3";
import audio2 from "../assets/audio_samples/audio2.mp3";
import audio3 from "../assets/audio_samples/audio3.mp3";
import audio4 from "../assets/audio_samples/audio4.mp3";
import audio5 from "../assets/audio_samples/audio5.mp3";
import audio6 from "../assets/audio_samples/audio6.mp3";
import audio7 from "../assets/audio_samples/audio7.mp3";
import audio8 from "../assets/audio_samples/audio8.mp3";
import audio9 from "../assets/audio_samples/audio9.mp3";
import audio10 from "../assets/audio_samples/audio10.mp3";
import avator4 from "../assets/avators/avator (4).png";
function Present() {
  const simulatedSlides = [
    {
      src: Slide1,
      alt: "Slide 1",
    },
    {
      src: Slide2,
      alt: "Slide 2",
    },
    {
      src: Slide3,
      alt: "Slide 3",
    },
    {
      src: Slide4,
      alt: "Slide 4",
    },
    {
      src: Slide5,
      alt: "Slide 5",
    },
    {
      src: Slide6,
      alt: "Slide 6",
    },
    {
      src: Slide7,
      alt: "Slide 7",
    },
    {
      src: Slide8,
      alt: "Slide 8",
    },
    {
      src: Slide9,
      alt: "Slide 9",
    },
    {
      src: Slide10,
      alt: "Slide 10",
    },
  ];
  const simulatedAudio = [
    {
      src: audio1,
      alt: "Music 1",
    },
    {
      src: audio2,
      alt: "Music 2",
    },
    {
      src: audio3,
      alt: "Music 3",
    },
    {
      src: audio4,
      alt: "Music 4",
    },
    {
      src: audio5,
      alt: "Music 5",
    },
    {
      src: audio6,
      alt: "Music 6",
    },
    {
      src: audio7,
      alt: "Music 7",
    },
    {
      src: audio8,
      alt: "Music 8",
    },
    {
      src: audio9,
      alt: "Music 9",
    },
    {
      src: audio10,
      alt: "Music 10",
    },
  ];
  const audioRefs = simulatedAudio.map((prop) => new Audio(prop.src));
  return (
    <div className="Background3">
      <div className="d-flex justify-content-center gap-3 m-2">
        <button className="avator-button">
          <img src={avator4} alt="Avatar 4" />
        </button>
      </div>
      <Carousel slide={simulatedSlides} audioRefs={audioRefs} />
    </div>
  );
}

export default Present;
