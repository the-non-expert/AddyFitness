<script>
  export let title = "Workout Session";
  export let host = "Workout Session";
  export let buttonText = "Start Workout";
  export let gifSrc = "";
  export let supportText = "";
  import bgCards from "$lib/images/bgCards.png";
</script>

<div
  class="text-black rounded-xl flex flex-col md:flex-row relative overflow-hidden"
>
  <!-- Image background for the current card -->
  <img
    src={bgCards}
    class="object-cover w-full h-full absolute video-bg"
    alt=""
  />

  <!-- Left part with the gif -->
  <div class="w-full md:w-6/12 z-10 flex justify-center items-center">
    <img src={gifSrc} alt="gif" class="w-full" />
  </div>

  <!-- Right part with details and button -->
  <div
    class="flex flex-col justify-evenly items-center w-full md:w-6/12 z-10 p-4 md:p-8 lg:p-12 text-center"
  >
    <div>
      <h2 class="text-lg md:text-xl font-bold text-red-500">{title}</h2>
      <h2 class="text-sm md:text-base">{host}</h2>
    </div>

    <div class="mt-2 md:mt-4">
      <p class="text-sm md:text-base">{supportText}</p>
    </div>

    <!-- Call to action button -->
    <button
      class="bg-black text-white rounded-3xl h-8 w-full md:w-64 cursor-pointer mt-4 md:mt-6"
    >
      {buttonText}
    </button>
  </div>
</div>

<style>
  .video-bg {
    z-index: 0;
  }
</style>
