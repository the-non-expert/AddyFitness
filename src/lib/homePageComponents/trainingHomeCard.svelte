<script>
  export let title = "";
  export let route = "";
  export let host = "Workout Session";
  export let buttonText = "Start Workout";
  export let gifSrc = "";
  import bgCards from "$lib/images/bgCards.png";

  const routingTrainingTitle = title.toLowerCase().split(" ").join("");
  const dynamicNutritionLink = `/training/${route}`;
</script>

<div class="text-white flex gap-3 h-32 rounded-xl relative overflow-hidden">
  <img src={bgCards} class="object-cover w-full h-full absolute" alt="" />

  <div class="z-10">
    <img src={gifSrc} alt="" class="w-full h-full object-cover rounded-xl" />
  </div>

  <div class="font-[Montserrat] z-10 flex flex-col gap-4 justify-center w-4/6">
    <div>
      <p class="text-pink-500 font-bold text-xl text-center">{title}</p>
      <p class="text-black text-center">{host}</p>
    </div>

    <div class="flex justify-center">
      <a href={dynamicNutritionLink}>
        <button
          class={`bg-black text-white rounded-3xl px-12 py-1 cursor-pointer mr-2`}
          >{buttonText}</button
        ></a
      >
    </div>
  </div>
</div>
