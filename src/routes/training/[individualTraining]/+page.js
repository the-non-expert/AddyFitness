import { cardData } from "./individualTrainingData.js";

export async function load({ params }) {
  // const { slug } = params.individualTraining;
  console.log(params.individualTraining);

  const data = cardData.find(
    (item) => item.route === params.individualTraining
  );
  return {
    props: {
      data,
    },
  };
}
