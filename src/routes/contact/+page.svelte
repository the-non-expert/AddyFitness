<script>
  import ContactForm from "./contactForm.svelte";
  import GetInTouch from "./getInTouch.svelte";
</script>

<div
  class="text-white bg-black flex justify-center p-6 items-center font-[Montserrat]"
>
  <!-- <p class="p-4">Contact Us</p> -->
  <div class="flex flex-col-reverse md:flex-row gap-12">
    <GetInTouch />
    <ContactForm />
  </div>
</div>
