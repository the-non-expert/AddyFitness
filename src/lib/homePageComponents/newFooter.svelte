<script>
  import phone from "$lib/images/phoneIcon.svg";
  import email from "$lib/images/emailIcon.svg";

  import instagramIcon from "$lib/images/instagramIcon.svg";
  import whatsappIcon from "$lib/images/whatsappIcon.svg";
  import linkedInIcon from "$lib/images/linkedinIcon.svg";

  import logo from "$lib/images/ad3.png";
  import caption from "$lib/images/addyFitnessCaption.png";
  // import Logo from "../images/pixelLogo.png";

  let socialMediaDetails = [
    {
      id: 1,
      name: "Instagram",
      iconUrl: instagramIcon,
      redirectLink:
        "https://www.instagram.com/_pixelpages_?igsh=MTJ3eWJmeTF4M2F1OQ==",
    },
    {
      id: 2,
      name: "Whatsapp",
      iconUrl: whatsappIcon,
      redirectLink: "https://wa.me/919861787335",
    },
    {
      id: 3,
      name: "LinkedIn",
      iconUrl: linkedInIcon,
      redirectLink: "",
    },
    // {
    //   id: 4,
    //   name: "Youtube",
    //   iconUrl: youtubeIcon,
    //   redirectLink: "",
    // },
  ];
</script>

<div class="w-[98%] text-white py-6 rounded-3xl mx-auto bg-[#242124] mb-2">
  <div class="flex justify-evenly items-center footerContainer mb-6">
    <div class="flex flex-col items-center">
      <img src={logo} alt=" Pixel Webpages" class="h-10" />
      <img src={caption} alt="Pixel Webpages" class="h-4" />
    </div>

    <div class="flex gap-5 footerOptions mt-5">
      <a href="/" class="font-semibold">Home</a>
      <a href="/about" class="font-semibold">About</a>
      <a href="/services" class="font-semibold">Training</a>
      <a href="/services" class="font-semibold">Nutrition</a>
      <a href="/services" class="font-semibold">Management</a>
      <a href="/services" class="font-semibold">Healthcare</a>

      <a href="/contact" class="font-semibold">Contact Us</a>
      <!-- <a href="/management" class="font-semibold">Management</a> -->
    </div>

    <div class="flex gap-4 mt-4">
      {#each socialMediaDetails as item (item.id)}
        <!-- svelte-ignore missing-declaration -->
        <a href={item.redirectLink} target="blank">
          <img src={item.iconUrl} alt="" class="w-6" />
        </a>
      {/each}
    </div>
  </div>

  <div class="flex justify-evenly items-center copyrightContainer">
    <div class="flex gap-4 copyrightDeets">
      <p class="font-semibold">© 2024 Addy Fitness</p>
      <div class="flex gap-4">
        <p class="cursor-pointer">Terms</p>
        <p class="cursor-pointer">Privacy</p>
        <p class="cursor-pointer">Cancellation & Refund</p>
      </div>
    </div>

    <div class="flex gap-5 text-white contactDeets">
      <div class="flex items-center gap-2">
        <img src={phone} alt="phoneIcon" class="w-4" />
        <p class=" font-[Montserrat]">+91 98617-87335</p>
      </div>
      <div class="flex items-center gap-2">
        <img src={email} alt="phoneIcon" class="w-4" />
        <p class=" font-[Montserrat]">addyfitness21@gmail.com</p>
      </div>
    </div>
  </div>
</div>

<style>
  @media only screen and (max-width: 999px) {
    .footerContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .footerOptions {
      flex-wrap: wrap;
      justify-content: center;
    }

    .copyrightContainer {
      flex-direction: column-reverse;
      margin-top: 10px;
      padding: 10px;
    }
    .contactDeets {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    .copyrightDeets {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
</style>
