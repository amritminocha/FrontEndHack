import "./css/Card.css";
function Card({ image, title, size }) {
  return (
    <div className="card w-200 c">
      <img className="h-100" src={image} alt={title} />
    </div>
  );
}
export default Card;
