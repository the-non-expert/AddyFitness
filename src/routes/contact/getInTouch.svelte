<script>
  import emailIcon from "$lib/images/emailIcon.svg";
  import phoneIcon from "$lib/images/phoneIcon.svg";
  import instagramIcon from "$lib/images/instagramIcon.svg";
  import whatsappIcon from "$lib/images/whatsappIcon.svg";
  import linkedInIcon from "$lib/images/linkedinIcon.svg";
  import youtubeIcon from "$lib/images/youtubeIcon.svg";

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

<div class="p-10 w-1/2 flex flex-col gap-4">
  <p class="font-semibold text-pink-500">Get in Touch</p>
  <p>
    We love to hear from you. Our friendly team is always here to contact with
    you
  </p>

  <div class="flex gap-2">
    <img src={emailIcon} alt="emailIcon" class="w-4" />
    <p class="font-semibold text-pink-500">Chat with Us!</p>
  </div>
  <p>addyfitness21@gmail.com</p>

  <div class="flex gap-2">
    <img src={phoneIcon} alt="phoneIcon" class="w-4" />
    <p class="font-semibold text-pink-500">Phone</p>
  </div>
  <div>
    <p>Mon-Fri from 8am to 5pm.</p>
    <p>( +91 ) 9861787335</p>
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
