import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/Menu.css";
import Card from "../components/Card";
import template1 from "../assets/templates/template1 (1).png";
import template2 from "../assets/templates/template1 (2).png";
import template3 from "../assets/templates/template1 (3).png";
import template4 from "../assets/templates/template1 (4).png";
import template5 from "../assets/templates/template1 (5).png";
import template6 from "../assets/templates/template1 (6).png";
import avator1 from "../assets/avators/avator (1).png";
import avator2 from "../assets/avators/avator (2).png";
import avator3 from "../assets/avators/avator (3).png";
import avator4 from "../assets/avators/avator (4).png";
import avator5 from "../assets/avators/avator (5).png";
import avator6 from "../assets/avators/avator (6).png";
function Menu() {
  const location = useLocation();
  const [text, setText] = useState(location.state.text);
  const [type, setType] = useState(location.state.type);
  const [language, setLanguage] = useState(location.state.language);
  const [avatar, setAvatar] = useState(1);
  const [template, setTemplate] = useState(1);

  useEffect(() => {
    console.log(avatar);
    console.log(template);
  }, [avatar, template]);
  return (
    <div className="Background2">
      <div className="content">
        <div className="container text-white p-5">
          <h1 className="Title">Just two steps to go!</h1>
          <h1 className="Title2">Select a template!</h1>
          <div className="d-flex justify-content-center gap-3 m-2 ">
            <button
              className={`p-0 m-0 ${template === 1 ? "selected2" : ""}`}
              onClick={() => setTemplate(1)}
            >
              <Card image={template1} title="Template 1" />
            </button>
            <button
              className={`p-0 m-0 ${template === 2 ? "selected2" : ""}`}
              onClick={() => setTemplate(2)}
            >
              <Card image={template2} title="Template 2" />
            </button>
            <button
              className={`p-0 m-0 ${template === 3 ? "selected2" : ""}`}
              onClick={() => setTemplate(3)}
            >
              <Card image={template3} title="Template 3" />
            </button>
          </div>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button
              className={`p-0 m-0 ${template === 4 ? "selected2" : ""}`}
              onClick={() => setTemplate(4)}
            >
              <Card image={template4} title="Template 1" />
            </button>
            <button
              className={`p-0 m-0 ${template === 5 ? "selected2" : ""}`}
              onClick={() => setTemplate(5)}
            >
              <Card image={template5} title="Template 2" />
            </button>
            <button
              className={`p-0 m-0 ${template === 6 ? "selected2" : ""}`}
              onClick={() => setTemplate(6)}
            >
              <Card image={template6} title="Template 3" />
            </button>
          </div>
          <h1 className="Title2">Select an avatar!</h1>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button className="avator-button" onClick={() => setAvatar(1)}>
              <img
                src={avator1}
                alt="Avatar 1"
                className={` ${avatar === 1 ? "selected" : ""}`}
              />
            </button>
            <button className="avator-button" onClick={() => setAvatar(2)}>
              <img
                src={avator2}
                alt="Avatar 2"
                className={` ${avatar === 2 ? "selected" : ""}`}
              />
            </button>
            <button className="avator-button" onClick={() => setAvatar(3)}>
              <img
                src={avator3}
                alt="Avatar 3"
                className={` ${avatar === 3 ? "selected" : ""}`}
              />
            </button>
          </div>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button className="avator-button" onClick={() => setAvatar(4)}>
              <img
                src={avator4}
                alt="Avatar 4"
                className={` ${avatar === 4 ? "selected" : ""}`}
              />
            </button>
            <button className="avator-button" onClick={() => setAvatar(5)}>
              <img
                src={avator5}
                alt="Avatar 5"
                className={` ${avatar === 5 ? "selected" : ""}`}
              />
            </button>
            <button className="avator-button " onClick={() => setAvatar(6)}>
              <img
                src={avator6}
                alt="Avatar 6"
                className={` ${avatar === 6 ? "selected" : ""}`}
              />
            </button>
          </div>
          <div className="d-flex container text-white justify-content-center z-5">
            <a href="/present" className="create-button">
              Create Presentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
