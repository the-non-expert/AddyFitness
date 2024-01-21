<script>
  export let title = "Workout Session";
  export let host = "Workout Session";
  export let buttonText = "Start Workout";
  export let gifSrc = "";
  export let bgColor = "black";
  export let textColor = "black";
  export let time = "60 mins";
  export let calorie = "300-400";
  export let frequency = "5 Sessions a Week";

  import timerWhite from "$lib/images/timerWhite.svg";
  import timerBlack from "$lib/images/timerBlack.svg";
  import calorieWhite from "$lib/images/calorieWhite.svg";
  import calorieBlack from "$lib/images/calorieBlack.svg";
  import sessionWhite from "$lib/images/sessionWhite.svg";
  import sessionBlack from "$lib/images/sessionBlack.svg";
  import bgVideo from "$lib/images/trainingCardBg.mp4";
</script>

<div class={`text-black rounded-lg flex relative overflow-hidden`}>
  <!-- Video background for the current card -->
  <video
    autoplay
    loop
    muted
    class="video-bg object-cover w-full h-full absolute"
  >
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <!-- left part with the gif -->
  <div class="w-6/12">
    <img src={gifSrc} alt="gif" class="w-64" />
  </div>

  <!-- right part with details and button -->
  <div class="flex flex-col justify-evenly w-6/12">
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
    <button class={`bg-black text-white rounded-3xl h-8 w-64 cursor-pointer`}>
      {buttonText}
    </button>
  </div>
</div>

<style>
  .video-bg {
    z-index: -1;
  }
</style>
