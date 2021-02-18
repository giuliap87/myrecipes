import Layout from "../components/Layout/Layout";
import Main from "../components/GiveARecipe/GiveARecipe";
import { connectToDatabase } from "../util/mongodb";

function Recipe({ recipes }) {
  return (
    <Layout title="Recipes of the day">
      <Main recipes={recipes} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const recipes = await db
    .collection("recipes")
    .find({})
    .sort({ metacritic: -1 })
    // .limit(20)
    .toArray();

  return {
    props: {
      recipes: JSON.parse(JSON.stringify(recipes)),
    },
  };
}

export default Recipe;
