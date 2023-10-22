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
  const [file, setFile] = useState(location.state.file);
  const [avatar, setAvatar] = useState(1);
  const [template, setTemplate] = useState(1);

  useEffect(() => {
    console.log(avatar);
    console.log(template);
  }, [avatar, template]);
  return (
    <div className="Background">
      <div className="content">
        <div className="container text-white p-5">
          <h1 className="Title">Just two steps to go!</h1>
          <h1 className="Title2">Select a template!</h1>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button className="p-0 m-0" onClick={() => setTemplate(1)}>
              <Card
                image={template1}
                title="Template 1"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setTemplate(2)}>
              <Card
                image={template2}
                title="Template 2"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setTemplate(3)}>
              <Card
                image={template3}
                title="Template 3"
              />
            </button>
          </div>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button className="p-0 m-0" onClick={() => setTemplate(4)}>
              <Card
                image={template4}
                title="Template 1"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setTemplate(5)}>
              <Card
                image={template5}
                title="Template 2"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setTemplate(6)}>
              <Card
                image={template6}
                title="Template 3"
              />
            </button>
          </div>
          <h1 className="Title2">Select an avatar!</h1>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button className="p-0 m-0" onClick={() => setAvatar(1)}>
              <Card
                image={avator1}
                title="Avatar 1"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setAvatar(2)}>
              <Card
                image={avator2}
                title="Avatar 2"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setAvatar(3)}>
              <Card
                image={avator3}
                title="Avatar 3"
              />
            </button>
          </div>
          <div className="d-flex justify-content-center gap-3 m-2">
            <button className="p-0 m-0" onClick={() => setAvatar(4)}>
              <Card
                image={avator4}
                title="Avatar 4"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setAvatar(5)}>
              <Card
                image={avator5}
                title="Avatar 5"
              />
            </button>
            <button className="p-0 m-0" onClick={() => setAvatar(6)}>
              <Card
                image={avator6}
                title="Avatar 6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
