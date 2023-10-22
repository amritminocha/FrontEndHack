import "./css/Menu.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Preview() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);
  return (
    <div className="Background3">
      <p>loading</p>
    </div>
  );
}

export default Preview;
