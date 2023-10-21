import "./css/Card.css"
function Card({ title, description, image }) {
  return (
    <div className="card w-300">
      <img className = "h-50" src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Card;