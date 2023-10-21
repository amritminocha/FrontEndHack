import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Menu() {
  const location = useLocation();
  const [text, setText] = useState(location.state.text);
  const [type, setType] = useState(location.state.type);
  const [file, setFile] = useState(location.state.file);
  const [avatar, setAvatar] = useState(0);
  const [template, setTemplate] = useState(0);
  useEffect(() => {
    console.log(location.state);
    console.log(text);
    console.log(type);
    console.log(file);
  }, [location.state]);
  return (
    <div className="App">
      <p>Menu Page</p>
    </div>
  );
}

export default Menu;
