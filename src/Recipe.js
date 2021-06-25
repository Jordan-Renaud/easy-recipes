import "./Recipe.css";
import { useParams } from "react-router";
import { recipes } from "./data";

export default function Recipe() {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="Recipe">
      <img src={recipes[id].image} />
      <h1>{recipes[id].title}</h1>
    </div>
  );
}
