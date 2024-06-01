<script>
  export let data;
  import bgCards from "$lib/images/bgCards.png";
  import gifSample from "$lib/images/weightGain.gif";

  import { paymentLogic } from "../../../lib/Payment/paymentLogic.js";

  let fetchData = data.props.data;
  console.log(fetchData);

  let handleClick = (amount, title, courseTitle) => {
    // Your function logic here
    console.log(amount, title, courseTitle);

    paymentLogic(amount, title, courseTitle);
  };
</script>

<div
  class=" flex flex-col justify-center items-center rounded-xl relative overflow-hidden"
>
  <img
    src={bgCards}
    class="object-cover w-full h-full absolute video-bg"
    alt=""
  />
  <div class="mt-10 text-6xl font-bold italic text-left">
    <span
      class="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-pink-500 relative inline-block"
    >
      <span class="relative text-white">{fetchData.title}</span>
    </span>
  </div>

  <!--Service Detail-->
  <p class="text-center p-8 font-[Montserrat] font-bold text-lg">
    {fetchData.supportText}
  </p>

  <div class="flex justify-evenly w-full mt-5 font-[Montserrat] mb-10">
    <div class="">
      <div class="">
        <p class="font-black font-[Lato] mt-4 text-3xl underline mb-2 text-2xl">
          What do you Get?
        </p>
        <ul class="flex flex-col gap-1 list-disc mt-4">
          {#each fetchData.perks as item (item)}
            <li class="font-semibold">{item}</li>
          {/each}
        </ul>
      </div>
      <div class="">
        <p class="font-black font-[Lato] mt-4 text-3xl underline mb-2 text-2xl">
          Plan Duration
        </p>
        <li class="font-semibold text-2xl list-disc">
          {fetchData.planDuration}
        </li>
      </div>
    </div>

    <!--Buying Options-->
    <div class="flex flex-col gap-4 mb-10 font-[Montserrat]">
      {#each fetchData.buyingOptionsBatch as item (item)}
        <div
          class="bg-pink-400 rounded-xl px-20 py-6 flex flex-col gap-2 items-center hover:bg-pink-500"
        >
          <p class="text-2xl underline decoration-solid">{item.title}</p>
          <p class="font-bold text-3xl">₹{item.price}/-</p>
          <!-- <a href={item.paymentLink} target="_blank"> -->
          <button
            class="bg-white font-bold hover:text-pink-600 p-2 rounded-xl mt-2 px-8"
            on:click={() =>
              handleClick(item.price, item.title, fetchData.title)}
            >Buy Now</button
          >
          <span
            class="px-5 font-bold text-sm bg-[#20ff30] text-pink-900 rounded-2xl"
            >{item.optionType}</span
          >
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .video-bg {
    z-index: -1;
  }
</style>
