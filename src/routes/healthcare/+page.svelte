<script>
  import emergency from "$lib/images/emergency.gif";
  import generalPhysician from "$lib/images/generalPhysician.gif";
  import medicineSpecialist from "$lib/images/medicineSpecialist.gif";
  import Thyroid from "$lib/images/thyroid.gif";
  import psychology from "$lib/images/psychology.gif";
  import Pregnancy from "$lib/images/pregnancy.gif";
  import BloodPressure from "$lib/images/bloodPressure.gif";
  import kidney from "$lib/images/kidney.gif";
  import ChildNutrition from "$lib/images/ChildNutrition.gif";
  import Live from "$lib/images/zumba.gif";
  import NutritionCard from "./healthcareCard.svelte";
  import HealthcareCard from "./healthcareCard.svelte";

  const nutritionServices = [
    {
      id: 1,
      name: "Emergency",
      gifSrc: emergency,
      supportText: "GET INSTANT EMERGENCY HELP FROM OUR DOCTORS",
    },
    {
      id: 2,
      name: "General Physician",
      gifSrc: generalPhysician,
      supportText: "CONSULT ABOUT ANY PROBLEM",
    },
    {
      id: 3,
      name: "Medicine Specialist",
      gifSrc: medicineSpecialist,
      supportText: "CONSULT SPECIFIC RELATED DISORDER",
    },
    {
      id: 4,
      name: "Gynaecologist",
      gifSrc: Pregnancy,
      supportText: "CONSULT GYNIC RELATED ISSUES CONFIDENTIALLY",
    },
    {
      id: 5,
      name: "Endocronologist",
      gifSrc: Thyroid,
      supportText: "GET REVERSE YOUR DIABETES AND THYROID AT HOME.",
    },
    {
      id: 6,
      name: "Psychologist",
      gifSrc: psychology,
      supportText: "GET A FRIEND TO CURE YOURSELF",
    },
  ];
</script>

<div class="text-white mt-6 grid grid-cols-2 gap-x-10 gap-y-4">
  {#each nutritionServices as item (item.id)}
    <HealthcareCard
      title={item.name}
      host=""
      buttonText="Book an Appointment"
      gifSrc={item.gifSrc}
      supportText={item.supportText}
    />
  {/each}
</div>
