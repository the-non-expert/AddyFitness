<script>
  export let imgSrc = "";
  export let foodName = "";
  export let recipeLink = "";
</script>

<a href={recipeLink} target="_blank">
  <div class="relative w-80 h-80">
    <img src={imgSrc} alt="" class="w-full h-full object-cover" />
    <div
      class="absolute inset-0 bg-black opacity-0 hover:opacity-80 flex flex-col justify-center items-center transition-opacity duration-300"
    >
      <p class="text-center font-[Montserrat] text-5xl text-pink-300">
        {foodName}
      </p>

      <span class="text-xs">(Click to find the recipe...)</span>
    </div>
  </div>
</a>
