<script>
  import yogaGif from "$lib/images/Yoga.gif";
  import TrainingCard from "./trainingCard.svelte";
  import dance from "$lib/images/dance.gif";
  import running from "$lib/images/Cardio.gif";
  import zumba from "$lib/images/zumba.gif";
  import oldageWorkout from "$lib/images/oldAge.gif";
  import Live from "$lib/images/liveExercise.gif";
</script>

<div class="text-white mt-6 grid grid-cols-2 gap-x-10 gap-y-4">
  <TrainingCard
    title="Live Workout Session"
    host="with Adnan Ali"
    buttonText="Book a Slot"
    gifSrc={Live}
    time="60-75 mins"
    calorie="300-400"
    frequency="5 Sessions a Week"
  />
  <TrainingCard
    title="Yoga"
    host="with Adnan Ali"
    buttonText="Book a Slot"
    bgColor="white"
    textColor="black"
    gifSrc={yogaGif}
    time="45-60 mins"
    calorie="100-250"
    frequency="3 Sessions a Week"
  />
  <TrainingCard
    title="HIIT and LIIT (Cardio Vascular)"
    host="with Adnan Ali"
    buttonText="Book a Slot"
    bgColor="white"
    gifSrc={running}
    time="40-50 mins"
    calorie="400-500"
    frequency="3 Sessions a Week"
  />
  <TrainingCard
    title="Dance"
    host="with Adnan Ali"
    buttonText="Book a Slot"
    gifSrc={dance}
    bgColor="black"
    textColor="white"
    time="50 mins"
    calorie="200-400"
    frequency="3 Sessions a Week"
  />
  <TrainingCard
    title="Zumba"
    host="with Adnan Ali"
    buttonText="Book a Slot"
    gifSrc={zumba}
    bgColor="black"
    textColor="white"
    time="50-65 mins"
    calorie="500-800"
    frequency="3 Sessions a Week"
  />
  <TrainingCard
    title="Old-Age Workout"
    host="with Adnan Ali"
    buttonText="Book a Slot"
    bgColor="white"
    gifSrc={oldageWorkout}
  />
</div>

<style>
  .video-bg {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;
    /* opacity: 0.3; */
  }
</style>
