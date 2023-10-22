import Carousel from "../components/Carousel";
import "./css/Present.css";
import template1 from "../assets/templates/template1 (1).png";
import template2 from "../assets/templates/template1 (2).png";
import template3 from "../assets/templates/template1 (3).png";
import music1 from "../assets/audio_samples/music1.mp3";
import music2 from "../assets/audio_samples/music2.mp3";
import music3 from "../assets/audio_samples/music3.mp3";
import avator1 from "../assets/avators/avator (1).png";
function Present() {
  const simulatedSlides = [
    {
      src: template1,
      alt: "Slide 1",
    },
    {
      src: template2,
      alt: "Slide 2",
    },
    {
      src: template3,
      alt: "Slide 3",
    },
  ];
  const simulatedAudio = [
    {
      src: music1,
      alt: "Music 1",
    },
    {
      src: music2,
      alt: "Music 2",
    },
    {
      src: music3,
      alt: "Music 3",
    },
  ];
  const audioRefs = simulatedAudio.map((prop) => new Audio(prop.src));
  return (
    <div className="Background3">
      <p>Present Page</p>
      <div className="d-flex justify-content-center gap-3 m-2">
        <button className="avator-button">
          <img src={avator1} alt="Avatar 1" />
        </button>
      </div>
      <Carousel slide={simulatedSlides} audioRefs={audioRefs} />
    </div>
  );
}

export default Present;
