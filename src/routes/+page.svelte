<script>
  import homeImage from "$lib/images/homePageSample.jpeg";

  import ServicesCarousal from "$lib/homePageComponents/servicesCarousal.svelte";
  import { nutritionServices } from "./nutrition/nutritionData";
  import { trainingServices } from "./training/trainingData.js";
  import NutritionHomeCard from "../lib/homePageComponents/nutritionHomeCard.svelte";
  import TrainingHomeCard from "$lib/homePageComponents/trainingHomeCard.svelte";

  import { RecipeData } from "$lib/homePageComponents/foodRecipeData.js";
  import FoodRecipeCard from "$lib/homePageComponents/foodRecipeCard.svelte";
  import ChooseUs from "../lib/homePageComponents/ChooseUs.svelte";
  import HomeHero from "../lib/homePageComponents/homeHero.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Addy Fitness" />
</svelte:head>

<section>
  <HomeHero />
  <div>
    <ChooseUs />
  </div>
</section>

<style>
  section {
    /* display: flex; */
    /* flex-direction: column; */
  }

  @media only screen and (max-width: 850px) {
    .homeHeroImage {
      width: 90%;
    }
  }
</style>
