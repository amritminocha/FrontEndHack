import "./css/Home.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/background_images/img1.png";
import img2 from "../assets/background_images/img2.png";
import img3 from "../assets/background_images/img3.png";
import img4 from "../assets/background_images/img4.png";
function Home() {
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [type, setType] = useState("prompt");
  const [language, setLanguage] = useState("English");
  const history = useNavigate();

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  function handleClick(e) {
    e.preventDefault();
    if (file !== "") {
      console.log(file);
      history("/menu", {
        state: { text: text, type: type, file: file, language: language },
      });
    } else if (type === "prompt") {
      if (text !== "") {
        history("/menu", {
          state: { text: text, type: type, language: language },
        });
      } else {
        alert("Please enter a prompt");
      }
    } else if (type === "youtube") {
      if (text !== "") {
        history("/menu", {
          state: { text: text, type: type, language: language },
        });
      } else {
        alert("Please enter a youtube URL");
      }
    } else {
    }
  }

  return (
    <div className="Background">
      {/* <img className="img4" src={img1} alt="background" />
      <img className="img3" src={img2} alt="background" />
      <img className="img2" src={img3} alt="background" />
      <img className="img1" src={img4} alt="background" /> */}
      <div className="content">
        <div className="container text-white p-5">
          <h1 className="Title">Craft Your Presentation in Seconds with AI</h1>
        </div>
        <div className="d-flex container text-white pe-5 pt-5 ps-5 justify-content-center pb-2">
          <textarea
            className="content w-50 p-2 h-150px text-white"
            placeholder="Enter prompt or a Youtube URL..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex container text-white justify-content-center gap-5 p-2 z-5">
          <div className="form-check z-5">
            <input
              className="form-check-input z-5"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => setType("youtube")}
            />
            <label className="form-check-label z-5">Youtube URL</label>
          </div>
          <div className="form-check z-5 mb-3">
            <input
              className="form-check-input z-5"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={() => setType("prompt")}
            />
            <label className="form-check-label z-5">Prompt</label>
          </div>
        </div>
        <div className="d-flex container text-white justify-content-center z-5 pb-3">
          <label htmlFor="file" className="custom-file-upload">
            Select File
          </label>
          <input
            type="file"
            id="file"
            className="text-primary"
            onChange={handleFile}
            style={{ display: "none" }}
          />
        </div>
        <div className="d-flex container text-white justify-content-center gap-5 p-2 z-5 pb-3">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {language}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("English")}
                >
                  Enlgish
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("Spanish")}
                >
                  Spanish
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("Arabic")}
                >
                  Arabic
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("Hindi")}
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("Mandarin")}
                >
                  Mandarin
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("French")}
                >
                  French
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex container text-white justify-content-center z-5">
          <button className="btn btn-primary btn-lg" onClick={handleClick}>
            Lets Roll
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
