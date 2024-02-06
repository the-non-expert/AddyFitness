<script>
  import homeImage from "$lib/images/weightlifting.jpeg";
  import WhyChooseUs from "$lib/homePageComponents/whyChooseUs.svelte";
  import ServicesCarousal from "../lib/homePageComponents/servicesCarousal.svelte";
  import { nutritionServices } from "./nutrition/nutritionData";
  import { trainingServices } from "./training/trainingData.js";
  import NutritionHomeCard from "../lib/homePageComponents/nutritionHomeCard.svelte";
  import TrainingHomeCard from "../lib/homePageComponents/trainingHomeCard.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="w-screen h-80 rounded-xl">
    <img
      src={homeImage}
      alt=""
      class="object-cover w-full h-full object-center"
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

  <a
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
  </ServicesCarousal>

  <WhyChooseUs />
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
