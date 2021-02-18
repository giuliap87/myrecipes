import styles from "./Form.module.scss";
import Button from "../../Layout/Button/Button";
import { useState, useEffect } from "react";

function Form({ handleRecipe, addNewRecipe }) {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    ingredients: [],
    preparation: "",
  });

  const [ingredients, setIngredients] = useState({
    name: "",
    quantity: "",
    unit: "",
  });

  // handling inputs change

  function recipeChange(e) {
    const { name, value } = e.target;
    setRecipe((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function ingredientChange(e) {
    const { name, value } = e.target;
    setIngredients((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  // submitting data

  function addIngredient(e) {
    e.preventDefault();
    setRecipe((prev) => {
      return {
        ...prev,
        ingredients: recipe.ingredients.concat(ingredients),
      };
    });
    setIngredients({
      name: "",
      quantity: "",
      unit: "",
    });
  }

  useEffect(() => {
    handleRecipe(recipe);
  }, [recipe, ingredients]);

  function submitRecipe() {
    addNewRecipe();
    setRecipe({
      recipeName: "",
      ingredients: [],
      preparation: "",
    });
  }
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Your recipe</h2>
      <label>
        Recipe Name
        <input
          type="text"
          placeholder="Name"
          id="recipeName"
          className={styles.recipeName}
          name="recipeName"
          value={recipe.recipeName || ""}
          onChange={recipeChange}
        />
      </label>
      <p>Ingredients</p>
      <div className={styles.ingredients}>
        <label>
          <input
            id="ingredientName"
            type="text"
            placeholder="Name"
            name="name"
            onChange={ingredientChange}
            value={ingredients.name || ""}
          />
        </label>
        <label>
          <input
            id="ingredientQuantity"
            type="number"
            placeholder="Quantity"
            id="quantity"
            className={styles.quantity}
            name="quantity"
            onChange={ingredientChange}
            value={ingredients.quantity || ""}
          />
        </label>
        <label>
          <select
            id="ingredientUnit"
            id="unit"
            name="unit"
            onChange={ingredientChange}
            value={ingredients.unit || "Unit"}
          >
            <option disabled>Unit</option>
            <option>ml</option>
            <option>gr</option>
            <option>piece</option>
          </select>
        </label>
        <Button text="+" size="sm" path="" func={addIngredient} />
      </div>
      <label className={styles.instructionsLabel} htmlFor="preparation">
        Preparation
      </label>
      <textarea
        type="text-area"
        name="preparation"
        rows={3}
        className={styles.instructions}
        value={recipe.preparation || ""}
        onChange={recipeChange}
      />
      <div className={styles.saveBtn}>
        <Button
          text="Save Recipe"
          type="submit"
          size="md"
          path="/new-recipe"
          func={submitRecipe}
        />
      </div>
    </form>
  );
}

export default Form;
