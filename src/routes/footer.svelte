<script>
  import { goto } from "$app/navigation";

  import icon from "$lib/images/addyFitnessIcon.png";
  import logo from "$lib/images/addyFitnessLogo.png";
  import caption from "$lib/images/addyFitnessCaption.png";
  import phone from "$lib/images/phoneIcon.svg";
  import email from "$lib/images/emailIcon.svg";

  import instagramIcon from "$lib/images/instagramIcon.svg";
  import whatsappIcon from "$lib/images/whatsappIcon.svg";
  import linkedInIcon from "$lib/images/linkedinIcon.svg";
  import youtubeIcon from "$lib/images/youtubeIcon.svg";

  function handleButtonClick(route) {
    console.log("button clicked");
    goto(route);
  }

  let socialMediaDetails = [
    {
      id: 1,
      name: "Instagram",
      iconUrl: instagramIcon,
      redirectLink: "",
    },
    {
      id: 2,
      name: "Whatsapp",
      iconUrl: whatsappIcon,
      redirectLink: "",
    },
    {
      id: 3,
      name: "LinkedIn",
      iconUrl: linkedInIcon,
      redirectLink: "",
    },
    {
      id: 4,
      name: "Youtube",
      iconUrl: youtubeIcon,
      redirectLink: "",
    },
  ];
</script>

<div
  class="w-[98%] bg-[#242124] text-white flex justify-evenly items-cente py-6 rounded-t-3xl"
>
  <div class="flex flex-col items-center">
    <div class="flex gap-2 items-center">
      <img src={icon} alt="Icon" class="flex h-16" />
      <div class="flex flex-col gap-1">
        <img src={logo} alt="Icon" class="w-64" />
        <img src={caption} alt="CaptionIcon" class="w-48" />
      </div>
    </div>

    <div class="flex mt-5 gap-4">
      {#each socialMediaDetails as item (item.id)}
        <!-- svelte-ignore missing-declaration -->
        <a href={item.redirectLink}>
          <img src={item.iconUrl} alt="" class="w-6" />
        </a>
      {/each}
    </div>
  </div>

  <div class="flex gap-10">
    <div>
      <p class="font-semibold font-[Montserrat] mb-4 text-red-400">Company</p>
      <div class="flex flex-col gap-1 font-light font-sans">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <a href="/about"
          ><p class="hover:text-red-300 cursor-pointer">About</p></a
        >
        <a href="/training"
          ><p class="hover:text-red-300 cursor-pointer">Training</p></a
        >
        <p class="hover:text-red-300 cursor-pointer">Community</p>
      </div>
    </div>

    <div>
      <p class="font-semibold font-[Montserrat] mb-4 text-red-400">Support</p>
      <div class="flex flex-col gap-1 font-light font-sans">
        <p class="hover:text-red-300 cursor-pointer">Feedback</p>
        <p class="hover:text-red-300 cursor-pointer">Contact</p>
        <p class="hover:text-red-300 cursor-pointer">Management</p>
      </div>
    </div>

    <div>
      <p class="font-semibold font-[Montserrat] mb-4 text-red-400">Links</p>
      <div class="flex flex-col gap-1 font-light font-sans">
        <p class="hover:text-red-300 cursor-pointer">Feedback</p>
        <p class="hover:text-red-300 cursor-pointer">Become a Trainer</p>
      </div>
    </div>
  </div>
  <div>
    <p class="font-semibold font-[Montserrat] mb-4 text-red-400">Contact</p>

    <div class="flex items-center gap-2">
      <img src={phone} alt="phoneIcon" class="w-4" />
      <p class=" font-[lato]">+91 9861787335</p>
    </div>
    <div class="flex items-center gap-2">
      <img src={email} alt="phoneIcon" class="w-4" />
      <p class=" font-[lato]">addyfitness21@gmail.com</p>
    </div>
  </div>
</div>

<!-- Copyright Footer -->
<div class="bg-[#242124] w-[98%] py-6 font-[Montserrat] rounded-b-3xl">
  <div class="w-full border-t solid border-white"></div>
  <div class="text-white flex justify-around items-center pt-6">
    <p>©Copyright by AddyFitness Inc.</p>

    <div class="flex gap-6">
      <a href="/privacypolicies"
        ><p class="hover:text-red-400">Privacy Policies</p></a
      >
      <a href="/terms&conditions"
        ><p class="hover:text-red-400">Terms & Conditions</p></a
      >
      <a href="/cancellation&refund"
        ><p class="hover:text-red-400">Cancellation & Refund</p></a
      >
    </div>
  </div>
</div>
