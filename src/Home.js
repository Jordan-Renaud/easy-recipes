import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1 className="title">Easy Recipes</h1>
      <h2 className="subheading">finding recipes doesn't have to be hard</h2>
      <div className="recipes">
        <Link to="/recipe/rice-bowl">
          <img className="recipe-image" src="https://picsum.photos/300/300" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
