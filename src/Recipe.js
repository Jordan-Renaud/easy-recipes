import "./Recipe.css";
import { useParams } from "react-router";

const recipes = {
  "rice-bowl": {
    title: "Rice Bowl",
    proteins: ["chicken", "beef", "tofu", "edamame"],
    vegetables: ["corn", "carrot", "peas", "cabbage", "raddish"],
    starchs: ["basmati", "sushi rice", "quinoa"],
    ingredients: ["soy sauce", "coriander", "brown sugar", "garlic"],
    steps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut non metus nec dolor vestibulum commodo",
      "Ut commodo tellus non fringilla malesuada",
      "Nullam ac ligula a dui dapibus tincidunt sit amet eu dolor",
      "Morbi id neque eleifend, scelerisque eros ac, imperdiet neque",
      "Nullam vulputate metus vel elit congue suscipit non sit amet neque",
    ],
  },
  spaghetti: {
    title: "Spaghetti",
    proteins: ["chicken", "beef", "tofu", "edamame"],
    vegetables: ["corn", "carrot", "peas", "cabbage", "raddish"],
    starchs: ["basmati", "sushi rice", "quinoa"],
    ingredients: ["soy sauce", "coriander", "brown sugar", "garlic"],
    steps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut non metus nec dolor vestibulum commodo",
      "Ut commodo tellus non fringilla malesuada",
      "Nullam ac ligula a dui dapibus tincidunt sit amet eu dolor",
      "Morbi id neque eleifend, scelerisque eros ac, imperdiet neque",
      "Nullam vulputate metus vel elit congue suscipit non sit amet neque",
    ],
  },
};

export default function Recipe() {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="Recipe">
      <img src="https://picsum.photos/500/500" />
      <h1>{recipes[id].title}</h1>
    </div>
  );
}
