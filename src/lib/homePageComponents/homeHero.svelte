<script>
  import weightLift from "../images/weightLift.jpg";
</script>

<div class="flex flex-col md:flex-row relative w-10/12 mx-auto">
  <div class="w-full mt-10 h-96 heroImg">
    <img
      src={weightLift}
      alt="weight"
      class="object-cover w-full h-full rounded-xl border-2 border-lime-400"
    />
    <div
      class="absolute inset-0 md:bg-gradient-to-r from-black to-transparent rounded-xl"
    />
  </div>

  <div
    class="homeText w-11/12 mx-auto relative text-white mt-5 flex flex-col justify-center md:absolute md:inset-0 md:mt-10"
  >
    <p class="text-6xl font-bold">
      <span>Fuel</span>
      <span class="text-outline"> Your</span>
      <span>Body</span>
      <span class="text-outline">Right</span>
    </p>
    <p class="mt-5 text-sm md:text-base w-full md:w-9/12">
      We are dedicated to helping you achieve your ideal body through tailored
      nutrition plans and expert guidance. Ensuring you can live your life to
      the fullest with optimal health and vitality.
    </p>
    <div class="flex gap-6 md:gap-12 text-2xl mt-10 stats">
      <p>
        <span class="text-3xl font-bold">100+</span> <br /> Members Joined
      </p>
      <p><span class="text-3xl font-bold">30+</span><br /> Fitness Programs</p>
    </div>
  </div>
</div>

<style>
  .text-outline {
    color: transparent;
    -webkit-text-stroke: 2px white;
  }

  @media (max-width: 999px) {
    .heroImg {
      height: 100%;
    }
    .homeText {
      width: 100%;
      text-align: center;
    }

    .stats {
      font-size: 1rem;
      justify-content: center;
    }
  }
</style>
