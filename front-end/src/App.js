import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Present from "./pages/Present";
import Loading from "./pages/Loading";
import ErrorPage from "./pages/404";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/present" element={<Present />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
