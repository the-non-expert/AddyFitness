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

  const nutritionServices = [
    {
      id: 1,
      name: "Weight Loss",
      gifSrc: WeightLoss,
      planDuration: "2 Months Plan",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 2,
      name: "Weight Gain",
      gifSrc: WeightGain,
      planDuration: "2 Months Plan",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 3,
      name: "Diabetes",
      gifSrc: diabetes,
      planDuration: "As per subsription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 4,
      name: "Thyroid",
      gifSrc: Thyroid,
      planDuration: "As per subscription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 5,
      name: "PCOS",
      gifSrc: PCOS,
      planDuration: "As per subscription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 6,
      name: "Gestation (Pregnancy )",
      gifSrc: Pregnancy,
      planDuration: "9 Months/ 39 Weeks",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 7,
      name: "Post Pregnancy",
      gifSrc: Live,
      planDuration: "1 year post pregnancy",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 8,
      name: "Senior Nutrition",
      gifSrc: ChildNutrition,
      planDuration: "As per subscription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 9,
      name: "Blood Pressure",
      gifSrc: BloodPressure,
      planDuration: "As per subscription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 10,
      name: "Renal Function (Kidney)",
      gifSrc: kidney,
      planDuration: "As per subscription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 11,
      name: "Child Nutrition",
      gifSrc: ChildNutrition,
      planDuration: "Yearly Plan",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
    {
      id: 10,
      name: "Anaemia",
      gifSrc: kidney,
      planDuration: "As per subsription",
      frequency: "Workout Plan Also Available",
      progressTracking: "Progress Tracking Weekly",
    },
  ];
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
