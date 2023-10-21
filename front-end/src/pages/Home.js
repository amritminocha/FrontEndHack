import "./css/Home.css";
import Card from "../components/Card.js";
import img1 from "../assets/background_images/img1.png";
import img2 from "../assets/background_images/img2.png";
import img3 from "../assets/background_images/img3.png";
import img4 from "../assets/background_images/img4.png";
function Home() {
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
            className="content w-50 p-2 h-150px"
            placeholder="Enter prompt or a Youtube URL..."
          ></textarea>
        </div>
        <div className="d-flex container text-white justify-content-center gap-5 p-2 z-5">
          <div className="form-check z-5">
            <input
              className="form-check-input z-5"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label z-5" for="flexRadioDefault1">
              Youtube URL
            </label>
          </div>
          <div className="form-check z-5 mb-3">
            <input
              className="form-check-input z-5"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label z-5" for="flexRadioDefault2">
              Prompt
            </label>
          </div>
        </div>
        <div className="d-flex container text-white justify-content-center z-5 pb-3">
          <input
            type="file"
            id="file"
            className="text-primary"
            placeholder="Upload File"
            title="Upload File"
          />
        </div>
        <div className="d-flex container text-white justify-content-center z-5">
          <button className="btn btn-primary btn-lg">Generate</button>
        </div>
        {/* <div className="flex container d-flex gap-5 justify-content-center">
      <Card title="Create" description="Create a presentation with a click of a button" image="https://th.bing.com/th/id/R.681caf025e059780e4dcdf5f03722e77?rik=T7xmFVEk5Ow6bg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNew-YouTube-logo.jpg&ehk=RDR%2fE4UZyrEzEhKzNi2rXq0jz39uMJJIZW0gmAdtF5g%3d&risl=&pid=ImgRaw&r=0" />
      <Card title="Create" description="Create a presentation with a click of a button" image="https://th.bing.com/th/id/OIP.24Bee1jcKijm0ziiJvBYUgHaGx?pid=ImgDet&rs=1" />
      <Card title="Create" description="Create a presentation with a click of a button" image="https://previews.123rf.com/images/infostocker/infostocker1903/infostocker190300021/124768347-retro-design-template-isolated-vector-colored-illustration-comic-text-dialog-box-cloud-speech-bubble.jpg" />
      </div> */}
      </div>
    </div>
  );
}
export default Home;
