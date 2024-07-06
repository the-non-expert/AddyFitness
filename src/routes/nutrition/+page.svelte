<script>
  import NutritionCard from "./nutritionCard.svelte";

  import { nutritionServices } from "./nutritionData.js";

  // console.log(nutritionServices);
</script>

<div
  class="text-white mt-6 p-10 individualCont grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4"
>
  {#each nutritionServices as item (item.id)}
    <NutritionCard
      title={item.name}
      host="with Adnan Ali"
      buttonText="Get your Nutrition Chart"
      gifSrc={item.gifSrc}
      time={item.planDuration}
      calorie={item.progressTracking}
      frequency={item.frequency}
    />
  {/each}
</div>

<style>
  @media (max-width: 999px) {
    .individualCont {
      padding: 10px;
    }
  }
</style>
