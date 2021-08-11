import "./Recipe.css";
import { useParams } from "react-router";
import { recipes } from "./data";
import { useState } from "react";
import MultiSelect from "react-multi-select-component";

export default function Recipe() {
  let { id } = useParams();
  console.log(id);

  const [protein, setProtein] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [starch, setStarch] = useState([]);

  const [addedProtein, setAddedProtein] = useState([]);
  const [addedVegetable, setAddedVegetable] = useState([]);
  const [addedStarch, setAddedStarch] = useState([]);

  function updateIngredients(type, food) {
    if (type === "proteins") {
      setProtein(food);
      let newProteins = [];
      food.forEach((item) => {
        if (!newProteins.includes(item.label)) {
          newProteins.push(item.label);
        }
      });
      setAddedProtein(newProteins);
    } else if (type === "vegetables") {
      setVegetable(food);
      let newVegetables = [];
      food.forEach((item) => {
        if (!newVegetables.includes(item.label)) {
          newVegetables.push(item.label);
        }
      });
      setAddedVegetable(newVegetables);
    } else if (type === "starches") {
      setStarch(food);
      let newStarches = [];
      food.forEach((item) => {
        if (!newStarches.includes(item.label)) {
          newStarches.push(item.label);
        }
      });
      setAddedStarch(newStarches);
    }
  }

  const allIngredients = [
    ...recipes[id].ingredients,
    ...addedProtein,
    ...addedVegetable,
    ...addedStarch,
  ];

  return (
    <div className="Recipe">
      <img
        src={process.env.PUBLIC_URL + recipes[id].image}
        alt={recipes[id].title}
      />
      <h1>{recipes[id].title}</h1>
      <div className="flex-container">
        <div className="food-component">
          <h3>proteins</h3>
          <div className="select-box">
            <MultiSelect
              options={recipes[id].proteins}
              value={protein}
              onChange={(food) => updateIngredients("proteins", food)}
              labelledBy="Proteins"
            />
          </div>
        </div>
        <div className="food-component">
          <h3>vegetables</h3>
          <div className="select-box">
            <MultiSelect
              options={recipes[id].vegetables}
              value={vegetable}
              onChange={(food) => updateIngredients("vegetables", food)}
              labelledBy="Vegetables"
            />
          </div>
        </div>
        <div className="food-component">
          <h3>starches</h3>
          <div className="select-box">
            <MultiSelect
              options={recipes[id].starchs}
              value={starch}
              onChange={(food) => updateIngredients("starches", food)}
              labelledBy="Starches"
            />
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-child">
          <h2>ingredients</h2>
          <div className="ingredient-list">
            {allIngredients.map((ingredient) => (
              <div className="ingredient" key={ingredient}>
                <input type="checkbox" name={ingredient} />
                <label htmlFor={ingredient}>{ingredient}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-child">
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
