<script>
  import absWorkoutGif from "$lib/images/absWorkoutGif.gif";
  import aboutBanner from "$lib/images/aboutBannerSample.gif";
  import ActivityTracker from "$lib/images/ActivityTracker.svg";
  import MeetTheTeam from "./meetTheTeam.svelte";
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-white">
  <div class="text-center font-[Lato] font-semibold mt-6 flex flex-col gap-2">
    <!-- <p class="text-6xl">Welcome to Addy Fitness</p> -->
    <p class="text-4xl text-[#20FF30] italic">
      Your Ultimate Destination for Health, Fitness, and Wellness!
    </p>
  </div>
  <div class="rounded-xl flex justify-center align-center mt-6">
    <div
      class="flex flex-col justify-between bg-pink-400 hover:bg-pink-700 hover:text-white rounded-lg p-6 text-black"
    >
      <p class="font-semibold text-[Montserrat] text-5xl">Our Mission</p>
      <p class="w-full font-light text-base font-[Montserrat]">
        Make fitness accessible to everyone, irrespective of their location or
        circumstances. Our online mode of delivery ensures that you can access
        our workouts from the comfort of your own home or anywhere you prefer.
        We understand the challenges of balancing busy schedules, which is why
        our workouts are designed to fit seamlessly into your routine.
      </p>
    </div>
    <div class="">
      <img
        src={absWorkoutGif}
        alt="About Us Gif"
        class="object-cover rounded-xl"
      />
    </div>
  </div>

  <!-- About us Banner-->
  <div class=" w-full mt-6">
    <img
      src={aboutBanner}
      alt="aboutBanner"
      class="rounded-lg w-screen h-80 object-cover object-top"
    />
  </div>

  <!-- Vision -->
  <div class=" flex gap-10 mt-12 bg-pink-300 rounded-3xl p-8 text-black">
    <!-- <div class="w-3/6 font-[Montserrat] text-3xl font-bold">
      We've crafted a dynamic design to energize your fitness journey.
    </div> -->
    <div class="flex flex-col gap-10 w-3/6">
      <blockquote class="text-3xl font-bold italic text-left text-slate-90">
        We've crafted a
        <span
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
        >
          <span class="relative text-white">dynamic</span>
        </span>
        design to energise your fitness journey.
      </blockquote>
      <div class="flex justify-center items-center align-center">
        <img src={ActivityTracker} alt="ActivityTracker" class="w-96" />
      </div>
    </div>
    <div class="w-5/6 font-[Lato] flex flex-col gap-3 text-lg">
      <p>
        Fitness is not just about exercise. It's also about nourishing your body
        with the right nutrition. Our team of expert nutritionists will provide
        personalized nutrition plans tailored to your individual requirements.
        We specialize in various health conditions, including diabetes,
        hypertension, hypotension, pregnancy, thyroid disorders, child
        nutrition, anemia, arthritis, obesity, renal dysfunction, and many more.
        We take a holistic approach to address these health concerns, combining
        the power of workouts and nutrition to enhance your well-being.
      </p>
      <p>
        One of our unique offerings is our E-Clinic facility, which brings
        healthcare right to your doorstep. Our experienced healthcare
        professionals are just a click away, offering virtual consultations and
        medical guidance for your specific health needs. For those who prefer
        in-person care, we have established partnerships with hospitals,
        clinics, and path labs across the country to ensure that you receive
        top-notch care offline as well.
      </p>
      <p>
        Addy Fitness is not just a fitness page; it's a complete package of
        health care and fitness facilities. We take pride in our ability to
        positively impact lives and help our clients lead healthier, happier
        lives. As we continue to expand, we offer franchising opportunities pan
        India, providing existing entities with the support and resources they
        need to grow and thrive.
      </p>
    </div>
  </div>

  <!-- Meet the Team -->
  <div class="mt-10 text-white">
    <MeetTheTeam />
  </div>
</div>
