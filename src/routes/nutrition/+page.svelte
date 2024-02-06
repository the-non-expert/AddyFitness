<script>
  import WeightLoss from "$lib/images/weightLoss.gif";
  import WeightGain from "$lib/images/weightGain.gif";
  import diabetes from "$lib/images/diabetes.gif";
  import Thyroid from "$lib/images/thyroid.gif";
  import PCOS from "$lib/images/PCOS.jpeg";
  import Pregnancy from "$lib/images/pregnancy.gif";
  import BloodPressure from "$lib/images/bloodPressure.gif";
  import kidney from "$lib/images/kidney.gif";
  import ChildNutrition from "$lib/images/ChildNutrition.gif";
  import Live from "$lib/images/zumba.gif";
  import NutritionCard from "./nutritionCard.svelte";

  import { nutritionServices } from "./nutritionData.js";

  console.log(nutritionServices);
</script>

<div class="text-white mt-6 grid grid-cols-2 gap-x-10 gap-y-4">
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
