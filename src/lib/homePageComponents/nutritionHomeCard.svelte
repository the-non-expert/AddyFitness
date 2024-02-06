<script>
  export let title = "";
  export let host = "Workout Session";
  export let buttonText = "Start Workout";
  export let gifSrc = "";
  import bgCards from "$lib/images/bgCards.png";

  const routingNutritionTitle = title.toLowerCase().split(" ").join("");
  const dynamicNutritionLink = `/nutrition/${routingNutritionTitle}`;
</script>

<div
  class="text-white flex gap-3 h-32 bg-red-700 rounded-xl relative overflow-hidden"
>
  <img src={bgCards} class="object-cover w-full h-full absolute" alt="" />

  <div class="z-10 w-36">
    <img src={gifSrc} alt="" class="w-full h-full object-cover rounded-xl" />
  </div>

  <div class="font-[Montserrat] z-10 flex flex-col gap-4 justify-center">
    <div>
      <p class="text-pink-500 font-bold text-xl text-center">{title}</p>
      <p class="text-black text-center">{host}</p>
    </div>

    <div>
      <a href={dynamicNutritionLink}>
        <button
          class={`bg-black text-white rounded-3xl px-2 py-1 cursor-pointer mr-2`}
          >{buttonText}</button
        ></a
      >
    </div>
  </div>
</div>
