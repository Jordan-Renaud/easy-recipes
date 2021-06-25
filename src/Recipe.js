import "./Recipe.css";
import { useParams } from "react-router";
import { recipes } from "./data";

export default function Recipe() {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="Recipe">
      <img src={recipes[id].image} alt={recipes[id]} />
      <h1>{recipes[id].title}</h1>
      <div className="flex-container">
        <div>
          <h2>ingredients</h2>
          {recipes[id].ingredients.map((ingredient) => (
            <div>
              <input type="checkbox" name={ingredient} />
              <label for={ingredient}>{ingredient}</label>
            </div>
          ))}
        </div>
        <div>
          <h2>steps</h2>
          <ol>
            {recipes[id].steps.map((step) => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
