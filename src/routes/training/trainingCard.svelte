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

<div
  class={`text-black rounded-lg flex flex-col md:flex-row relative overflow-hidden`}
>
  <!-- image background for the current card -->
  <img
    src={bgCards}
    class="video-bg object-cover w-full h-full absolute"
    alt=""
  />

  <!-- Left part with the gif -->
  <div class="w-full md:w-6/12 z-10 flex justify-center items-center">
    <img src={gifSrc} alt="gif" class="w-full" />
  </div>

  <!-- Right part with details and button -->
  <div
    class="flex flex-col justify-evenly w-full md:w-6/12 z-10 p-4 md:ml-4 md:p-0"
  >
    <div>
      <h2 class="text-lg md:text-xl font-bold text-red-500">{title}</h2>
      <h2 class="text-sm md:text-base">{host}</h2>
    </div>

    <div class="mt-2 md:mt-0">
      <div class="flex gap-2 items-center">
        <img src={timerBlack} alt="timer" class="w-4 md:w-5" />
        <p class="font-['Montserrat'] text-sm md:text-base">{time}</p>
      </div>

      <div class="flex gap-2 items-center mt-2 md:mt-0">
        <img src={calorieBlack} alt="calorie" class="w-4 md:w-5" />
        <p class="font-['Montserrat'] text-sm md:text-base">{calorie}</p>
      </div>

      <div class="flex gap-2 items-center mt-2 md:mt-0">
        <img src={sessionBlack} alt="session" class="w-4 md:w-5" />
        <p class="font-['Montserrat'] text-sm md:text-base">{frequency}</p>
      </div>
    </div>

    <!-- Call to action button -->
    <a href={dynamicLink} class="mt-4 md:mt-0">
      <button
        class={`bg-black text-white rounded-3xl h-8 w-full md:w-64 cursor-pointer`}
      >
        {buttonText}
      </button>
    </a>
  </div>
</div>

<style>
  .video-bg {
    z-index: 0;
  }
</style>
