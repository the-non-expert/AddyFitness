<script>
  export let title = "Workout Session";
  export let host = "Workout Session";
  export let buttonText = "Start Workout";
  export let gifSrc = "";
  export let supportText = "";
  import timerBlack from "$lib/images/timerBlack.svg";
  import calorieBlack from "$lib/images/calorieBlack.svg";
  import sessionBlack from "$lib/images/sessionBlack.svg";
  import bgVideo from "$lib/images/trainingCardBg.mp4";
  import bgCards from "$lib/images/bgCards.png";
</script>

<div class={`text-black rounded-lg flex relative overflow-hidden`}>
  <!-- Video background for the current card -->
  <img src={bgCards} class="object-cover w-full h-full absolute" alt="" />

  <!-- left part with the gif -->
  <div class="w-3/6 z-10">
    <img src={gifSrc} alt="gif" class="w-64 h-52 object-cover" />
  </div>

  <!-- right part with details and button -->
  <div class="flex flex-col justify-evenly items-center z-10 px-1">
    <div>
      <h2 class="text-xl font-bold text-red-500">{title}</h2>
      <h2 class="">{host}</h2>
    </div>

    <div class="text-center">
      <p>{supportText}</p>
    </div>

    <!-- Call to action button -->
    <button
      class={`bg-black text-white rounded-3xl h-8 w-64 cursor-pointer mr-2`}
    >
      {buttonText}
    </button>
  </div>
</div>
