import "./ImageLink.css";
import { Link } from "react-router-dom";

export default function ImageLink(props) {
  return (
    <div className="panel">
      <Link to={"/recipe/" + props.recipeName}>
        <img
          className="recipe-image"
          src={props.recipeImage}
          alt={props.recipeName}
        />
      </Link>
    </div>
  );
}
