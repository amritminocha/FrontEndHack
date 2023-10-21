import "./css/Home.css";
import Card from "../components/Card.js";
function Home() {
  return (
    <div className="Background">
      <div className="container text-white p-5">
      <h1 className = "Title w-75">Craft Your Presentation in Seconds with AI</h1>
      <Card title="Create" description="Create a presentation with a click of a button" image="https://i.imgur.com/3QXc8QX.png" />
      </div>
    </div>
  );
}
export default Home;
