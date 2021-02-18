import styles from "./NewRecipe.module.scss";
import Form from "./Form/Form";

function NewRecipe({ handleRecipe, addNewRecipe, recipe }) {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form
          handleRecipe={handleRecipe}
          addNewRecipe={addNewRecipe}
        />
        <div className={styles.recipePreview}>
          <p>Recipe preview:</p>
          <h2>Title: {recipe && recipe.recipeName}</h2>
          <ul>
            {(recipe && recipe.ingredients) && recipe.ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.quantity} {ingredient.unit} - {ingredient.name}
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>
            {recipe && recipe.preparation}
          </p>
        </div>
      </div>
    </main>
  );
}

export default NewRecipe;
