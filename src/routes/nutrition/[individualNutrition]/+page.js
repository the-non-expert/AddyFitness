import { nutritionCardData } from "./individualNutritionData.js";

export async function load({ params }) {
  // const { slug } = params.individualTraining;
  console.log(nutritionCardData);
  console.log(params.individualNutrition);

  const data = nutritionCardData.find(
    (item) => item.route === params.individualNutrition
  );

  return {
    props: {
      data,
    },
  };
}
