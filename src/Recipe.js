import "./Recipe.css";
import { useParams } from "react-router";
import { recipes } from "./data";
import { useState } from "react";
import MultiSelect from "react-multi-select-component";

export default function Recipe() {
  let { id } = useParams();
  console.log(id);

  const [selected, setSelected] = useState([]);

  return (
    <div className="Recipe">
      <img src={recipes[id].image} alt={recipes[id]} />
      <h1>{recipes[id].title}</h1>
      <div className="flex-container">
        <div>
          <h3>proteins</h3>
          <div className="select-box">
            <MultiSelect
              options={recipes[id].proteins}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
        </div>
        <div>
          <h3>vegetables</h3>
          <div className="select-box">
            <MultiSelect
              options={recipes[id].vegetables}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
        </div>
        <div>
          <h3>starchs</h3>
          <div className="select-box">
            <MultiSelect
              options={recipes[id].starchs}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div>
          <h2>ingredients</h2>
          {recipes[id].ingredients.map((ingredient) => (
            <div key={ingredient}>
              <input type="checkbox" name={ingredient} />
              <label htmlFor={ingredient}>{ingredient}</label>
            </div>
          ))}
        </div>
        <div>
          <h2>steps</h2>
          <ol>
            {recipes[id].steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
