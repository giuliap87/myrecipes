import Layout from "../components/Layout/Layout";
import Main from "../components/NewRecipe/NewRecipe";
import { useState } from "react";
function NewRecipe() {
  const [recipe, setRecipe] = useState();
  function handleRecipe(recipe) {
    setRecipe(recipe);
  }

 async function addNewRecipe(){
    const res = await fetch("http://localhost:3000/api/recipes", {
      method: "post",
      body: JSON.stringify(recipe),
    });
  }

  return (
    <Layout title="New recipe">
      <Main
        handleRecipe={handleRecipe}
        addNewRecipe={addNewRecipe}
        recipe={recipe}
      />
    </Layout>
  );
}

export default NewRecipe;
