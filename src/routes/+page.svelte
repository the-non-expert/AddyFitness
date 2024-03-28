<script>
  import homeImage from "$lib/images/homePageSample.jpeg";
  import WhyChooseUs from "$lib/homePageComponents/whyChooseUs.svelte";
  import ServicesCarousal from "../lib/homePageComponents/servicesCarousal.svelte";
  import { nutritionServices } from "./nutrition/nutritionData";
  import { trainingServices } from "./training/trainingData.js";
  import NutritionHomeCard from "../lib/homePageComponents/nutritionHomeCard.svelte";
  import TrainingHomeCard from "../lib/homePageComponents/trainingHomeCard.svelte";

  import { RecipeData } from "$lib/homePageComponents/foodRecipeData.js";
  import FoodRecipeCard from "../lib/homePageComponents/foodRecipeCard.svelte";

  console.log(RecipeData);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class=" h-72 rounded-xl">
    <img
      src={homeImage}
      alt=""
      class="object-cover w-full h-full object-top border-2 border-lime-400 rounded-xl shadow-lg shadow-green-700"
    />
  </div>

  <a
    href="/training"
    class="flex items-baseline gap-2 hover:text-pink-600 text-white
  text-white"
  >
    <p class=" text-2xl font-[Montserrat] mb-4 font-bold mt-5 pointer">
      Training Services
    </p>
    <span class=" text-xs">(click here to know more)</span>
  </a>
  <ServicesCarousal>
    {#each trainingServices as item (item.id)}
      <div class="mr-1">
        <TrainingHomeCard
          title={item.name}
          host="with Adnan Ali"
          buttonText="Book a Slot"
          gifSrc={item.gifSrc}
          route={item.route}
        />
      </div>
    {/each}
  </ServicesCarousal>

  <!-- <a
    href="/nutrition"
    class="flex items-baseline gap-2 hover:text-pink-600 text-white
  text-white"
  >
    <p class=" text-2xl font-[Montserrat] mb-4 font-bold mt-5 pointer">
      Nutrition Services
    </p>
    <span class=" text-xs">(click here to know more)</span>
  </a>
  <ServicesCarousal>
    {#each nutritionServices as item (item.id)}
      <div class="mr-1">
        <NutritionHomeCard
          title={item.name}
          host="with Adnan Ali"
          buttonText="Get your Nutrition Chart"
          gifSrc={item.gifSrc}
        />
      </div>
    {/each}
  </ServicesCarousal> -->

  <WhyChooseUs />

  <div class="mt-10">
    <blockquote class="text-5xl font-semibold italic text-center text-white">
      <span class="relative text-white underline decoration-[#20ff30]"
        >Healthy Meal Recipes!</span
      >
    </blockquote>

    <div class="mt-10">
      <ServicesCarousal>
        {#each RecipeData as item (item.id)}
          <div class="mr-1">
            <FoodRecipeCard
              imgSrc={item.imgSrc}
              foodName={item.name}
              recipeLink={item.recipeLink}
            />
          </div>
        {/each}
      </ServicesCarousal>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    flex: 0.6;
  }
</style>
