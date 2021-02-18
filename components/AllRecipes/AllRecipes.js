import styles from "./AllRecipes.module.scss";
import Card from "./Card/Card";

function AllRecipes({recipes}) {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>All recipes</h1>
        <div className={styles.cardsContainer}>
          {recipes.map((recipe) => (
            <Card
              key={recipe._id}
              name={recipe.name}
              preparation={recipe.preparation}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllRecipes;
