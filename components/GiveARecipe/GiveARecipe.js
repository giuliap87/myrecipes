import { useState } from "react";

import styles from "./GiveARecipe.module.scss";
import Card from "../AllRecipes/Card/Card";
import Button from "../Layout/Button/Button";

function GiveARecipe({ recipes }) {
  const [count, setCount] = useState(null);
  function randomRecipe() {
    if (count === null || count >= recipes.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Inspire me</h1>
      <Button
        size="lg"
        text={count === 0 || count > 0 ? "Change recipe" : "Give me a recipe"}
        path=""
        func={randomRecipe}
      />
      {(count === 0 || count > 0) > 0 && (
        <Card
          name={recipes[count].name}
          ingredients={recipes[count].ingredients}
          preparation={recipes[count].instructions}
        />
      )}
    </main>
  );
}

export default GiveARecipe;
