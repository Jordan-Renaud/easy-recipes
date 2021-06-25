import "./Home.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import { recipes } from "./data";
import ImageLink from "./ImageLink";

function Home() {
  return (
    <div className="Home">
      <h1 className="title">Easy Recipes</h1>
      <h2 className="subheading">finding recipes doesn't have to be hard</h2>

      <Flicking align="prev" circular={true}>
        <div className="image-grid">
          {Object.keys(recipes).map((recipe) => (
            <ImageLink
              key={recipe}
              recipeName={recipe}
              recipeImage={recipes[recipe].image}
            />
          ))}
        </div>
      </Flicking>
    </div>
  );
}

export default Home;
