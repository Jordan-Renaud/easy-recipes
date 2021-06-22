import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1 className="title">Easy Recipes</h1>
      <h2 className="subheading">finding recipes doesn't have to be hard</h2>
      <div className="recipes">
        <a href="#">
          <img className="recipe-image" src="https://picsum.photos/300/300" />
        </a>
      </div>
    </div>
  );
}

export default Home;
