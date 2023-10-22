import "./css/Menu.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Preview() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/gpt", {
        params: { topic: "Hello", total_slides: 5 },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Background3">
      <p>loading</p>
    </div>
  );
}

export default Preview;
