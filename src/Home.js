import "./Home.css";

import { recipes } from "./data";
import ImageLink from "./ImageLink";

function Home() {
  const imageGrid = [
    "large-square",
    "medium-rectangle",
    "medium-rectangle-2",
    "medium-square",
    "large-rectangle",
    "small-square",
  ];
  return (
    <div className="Home">
      <h1 className="title">Easy Recipes</h1>
      <h2 className="subheading">finding recipes doesn't have to be hard</h2>

      <div className="container">
        {Object.keys(recipes).map((recipe, index) => (
          <ImageLink
            key={recipe}
            gridLocation={imageGrid[index]}
            recipeName={recipe}
            recipeImage={recipes[recipe].image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
