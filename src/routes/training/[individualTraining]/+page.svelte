<script>
  export let data;

  import bgCards from "$lib/images/bgCards.png";
  import { paymentLogic } from "../../../lib/Payment/paymentLogic.js";

  let fetchData = data.props.data;

  let selectedTrainingType = fetchData.typeOfTraining[0] || "";
  let selectedTrainingTime = fetchData.batchTiming[0] || "";

  function handleTrainingSelection(type) {
    selectedTrainingType = type;
  }

  function handleTimeSelection(time) {
    selectedTrainingTime = time;
  }

  let handleClick = (amount, title, courseTitle) => {
    paymentLogic(amount, title, courseTitle);
  };
</script>

<div
  class="flex flex-col justify-center items-center relative overflow-hidden rounded-xl p-4 m-4 md:p-10"
>
  <img
    src={bgCards}
    class="bgCont object-cover w-full h-full absolute"
    alt=""
  />

  <div class="mt-10 text-3xl md:text-6xl font-bold italic text-center">
    <span
      class="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-pink-500 relative inline-block"
    >
      <span class="relative text-white">{fetchData.title}</span>
    </span>
  </div>

  <!--Service Detail-->
  <div class="flex flex-col md:flex-row mt-5 font-[Montserrat] w-full">
    <div class="w-full md:w-1/2 p-4 md:p-8">
      <p class="font-semibold">{fetchData.supportText}</p>

      <p class="font-bold font-[Lato] mt-4 text-xl">Session Split</p>
      <ul class="list-disc pl-4">
        {#each fetchData.sessionSplit as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
      <p class="font-bold font-[Lato] mt-4 text-xl">What do you get?</p>
      <ul class="list-disc pl-4">
        {#each fetchData.perks as item (item)}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <!--Right Side-->
    <div class="w-full md:w-1/2 md:p-8 flex flex-col gap-4">
      <!--Training Type Selection-->
      <div class=" p-4">
        <p class="font-semibold font-[Lato] text-xl">Training Type</p>
        <p class="font-light text-xs">Select one of the below.</p>

        <!-- Training Options -->
        <div class="flex flex-wrap gap-1 mt-2 trainingOps">
          {#each fetchData.typeOfTraining as item (item)}
            <button
              on:click={() => handleTrainingSelection(item)}
              class={`${
                selectedTrainingType === item
                  ? "text-black bg-white"
                  : "hover:bg-white hover:text-black text-pink-100"
              } px-4 py-2 rounded-full focus:outline-none bg-pink-400 mt-2 font-semibold trainingButton`}
            >
              {item}
            </button>
          {/each}
        </div>
      </div>

      <!--Training Time Selection-->
      <div>
        <p class="font-semibold font-[Lato] text-xl">Time</p>
        {#if selectedTrainingType == "Batch Training"}
          <p class="font-light text-xs">Select one of the below.</p>
        {/if}

        <div class="">
          {#if selectedTrainingType == "Batch Training"}
            <div class="flex flex-wrap gap-4">
              {#each fetchData.batchTiming as item (item)}
                <button
                  class={`${
                    selectedTrainingTime === item
                      ? "text-black bg-white"
                      : "hover:bg-white hover:text-black text-pink-100"
                  } px-4 py-2 rounded-full focus:outline-none bg-pink-400 mt-2 font-semibold`}
                  on:click={() => handleTimeSelection(item)}
                >
                  {item}
                </button>
              {/each}
            </div>
          {:else if selectedTrainingType === "Personal Training"}
            <div class="flex">
              <p
                class="px-4 py-2 rounded-full focus:outline-none text-black bg-white mt-2 font-semibold"
              >
                Your Convenient Time
              </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!--Buying Options-->
  {#if selectedTrainingType == "Batch Training"}
    <div
      class="flex flex-wrap justify-center gap-2 mt-10 font-[Montserrat] w-full"
    >
      {#each fetchData.buyingOptionsBatch as item (item)}
        <div
          class="bg-pink-400 rounded-xl px-6 md:px-12 py-6 flex flex-col gap-2 items-center hover:bg-pink-500"
        >
          <p class="text-xl md:text-2xl underline decoration-solid">
            {item.title}
          </p>
          <p class="font-bold text-2xl md:text-3xl">₹{item.price}/-</p>

          <button
            class="bg-white font-bold hover:text-pink-600 p-2 rounded-xl mt-2 px-4 md:px-8"
            on:click={() =>
              handleClick(item.price, item.title, fetchData.title)}
          >
            Buy Now
          </button>
        </div>
      {/each}
    </div>
  {:else if selectedTrainingType == "Personal Training"}
    <div
      class="flex flex-wrap justify-center gap-4 mb-10 font-[Montserrat] w-full"
    >
      {#each fetchData.buyingOptionsPersonal as item (item)}
        <div
          class="bg-pink-400 rounded-xl px-6 md:px-12 py-6 flex flex-col gap-2 items-center hover:bg-pink-500"
        >
          <p class="text-xl md:text-2xl underline decoration-solid">
            {item.title}
          </p>
          <p class="font-bold text-2xl md:text-3xl">₹{item.price}/-</p>
          <a href={item.paymentLink} target="_blank">
            <button
              class="bg-white font-bold hover:text-pink-600 p-2 rounded-xl mt-2 px-4 md:px-8"
            >
              Buy Now
            </button>
          </a>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .bgCont {
    z-index: -1;
  }

  @media (max-width: 999px) {
    .trainingOps {
      justify-content: center;
    }
    .trainingButton {
      width: 100%;
    }
  }
</style>
