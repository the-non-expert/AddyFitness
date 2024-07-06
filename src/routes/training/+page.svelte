<script>
  import TrainingCard from "./trainingCard.svelte";
  import yogaGif from "$lib/images/Yoga.gif";
  import dance from "$lib/images/dance.gif";
  import running from "$lib/images/Cardio.gif";
  import zumba from "$lib/images/zumba.gif";
  import oldageWorkout from "$lib/images/oldAge.gif";
  import Live from "$lib/images/liveExercise.gif";

  // Array of objects representing the training sessions
  const trainingSessions = [
    {
      title: "Live Workout Session",
      host: "with Adnan Ali",
      buttonText: "Book a Slot",
      gifSrc: Live,
      time: "60-75 mins",
      calorie: "300-400",
      frequency: "5 Sessions a Week",
    },
    {
      title: "Yoga",
      host: "with Adnan Ali",
      buttonText: "Book a Slot",
      bgColor: "white",
      textColor: "black",
      gifSrc: yogaGif,
      time: "45-60 mins",
      calorie: "100-250",
      frequency: "3 Sessions a Week",
    },
    {
      title: "HIIT and LIIT (Cardio Vascular)",
      host: "with Adnan Ali",
      buttonText: "Book a Slot",
      bgColor: "white",
      gifSrc: running,
      time: "40-50 mins",
      calorie: "400-500",
      frequency: "3 Sessions a Week",
    },
    {
      title: "Dance",
      host: "with Adnan Ali",
      buttonText: "Book a Slot",
      gifSrc: dance,
      bgColor: "black",
      textColor: "white",
      time: "50 mins",
      calorie: "200-400",
      frequency: "3 Sessions a Week",
    },
    {
      title: "Zumba",
      host: "with Adnan Ali",
      buttonText: "Book a Slot",
      gifSrc: zumba,
      bgColor: "black",
      textColor: "white",
      time: "50-65 mins",
      calorie: "500-800",
      frequency: "3 Sessions a Week",
    },
    {
      title: "Old-Age Workout",
      host: "with Adnan Ali",
      buttonText: "Book a Slot",
      bgColor: "white",
      gifSrc: oldageWorkout,
    },
  ];
</script>

<div
  class="text-white mt-6 p-10 individualCont grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4"
>
  {#each trainingSessions as session}
    <TrainingCard
      title={session.title}
      host={session.host}
      buttonText={session.buttonText}
      gifSrc={session.gifSrc}
      time={session.time}
      calorie={session.calorie}
      frequency={session.frequency}
      bgColor={session.bgColor}
      textColor={session.textColor}
    />
  {/each}
</div>

<style>
  @media (max-width: 999px) {
    /* .grid-cols-2 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    } */
    .individualCont {
      padding: 10px;
    }
  }
</style>
