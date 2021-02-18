// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  const { db } = await connectToDatabase();
  const recipes = await db
    .collection("recipes")
    .insertOne({
      "name": data.recipeName,
      "ingredients": data.ingredients,
      "preparation": data.preparation
    })
    // .find({})
    // .sort({ metacritic: -1 })
    // .limit(20)
    // .toArray();

  res.json(recipes);
};