import styles from "./Card.module.scss";

function Card({ name, preparation, ingredients }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.recipeName}>{name}</h4>
      <ul className={styles.ingredientsList}>
        {ingredients.map((ing) => (
          <li key={ing.name}>
            {ing.quantity} {ing.unit} - {ing.name}
          </li>
        ))}
      </ul>
      <p className={styles.preparation}>{preparation}</p>
    </div>
  );
}

export default Card;
