<script>
  export let title = "Workout Session";
  export let host = "Workout Session";
  export let buttonText = "Start Workout";
  export let gifSrc = "";
  export let time = "60 mins";
  export let calorie = "300-400";
  export let frequency = "5 Sessions a Week";

  import timerBlack from "$lib/images/timerBlack.svg";
  import calorieBlack from "$lib/images/calorieBlack.svg";
  import sessionBlack from "$lib/images/sessionBlack.svg";
  import bgVideo from "$lib/images/trainingCardBg.mp4";
  import bgCards from "$lib/images/bgCards.png";

  const routingTitle = title.toLowerCase().split(" ").join("");
  const dynamicLink = `/training/${routingTitle}`;
</script>

<div class={`text-black rounded-lg flex relative overflow-hidden`}>
  <!-- Video background for the current card -->
  <img
    src={bgCards}
    class="video-bg object-cover w-full h-full absolute"
    alt=""
  />

  <!-- left part with the gif -->
  <div class="w-6/12 z-10">
    <img src={gifSrc} alt="gif" class="w-64" />
  </div>

  <!-- right part with details and button -->
  <div class="flex flex-col justify-evenly w-6/12 z-10">
    <div>
      <h2 class="text-xl font-bold text-red-500">{title}</h2>
      <h2 class="">{host}</h2>
    </div>

    <div class="">
      <div class="flex gap-2">
        <img src={timerBlack} alt="calorieBlack" class="w-5" />
        <p class="font-['Montserrat']">{time}</p>
      </div>

      <div class="flex gap-2">
        <img src={calorieBlack} alt="calorieBlack" class="w-5" />

        <p class="font-['Montserrat']">{calorie}</p>
      </div>

      <div class="flex gap-2">
        <img src={sessionBlack} alt="sessionBlack" class="w-5" />

        <p class="font-['Montserrat']">{frequency}</p>
      </div>
    </div>

    <!-- Call to action button -->
    <a href={dynamicLink}>
      <button class={`bg-black text-white rounded-3xl h-8 w-64 cursor-pointer`}>
        {buttonText}
      </button></a
    >
  </div>
</div>

<style>
  .video-bg {
    z-index: 0;
  }
</style>
