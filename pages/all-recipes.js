import Layout from "../components/Layout/Layout";
import Main from "../components/AllRecipes/AllRecipes";
import {connectToDatabase} from "../util/mongodb";

function AllRecipes({recipes}) {
  return (
    <Layout title="All your recipes">
      <Main recipes={recipes}/>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const recipes = await db
    .collection("recipes")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

  return {
    props: {
      recipes: JSON.parse(JSON.stringify(recipes)),
    },
  };
}

export default AllRecipes;
