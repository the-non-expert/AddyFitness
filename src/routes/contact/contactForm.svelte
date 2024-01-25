<script>
</script>

<div class="p-10 w-1/2 flex flex-col gap-8 bg-pink-300">
  <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
    Start your
    <span
      class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
    >
      <span class="relative text-white">fitness</span>
    </span>
    journey
  </blockquote>

  <div class="flex flex-col gap-4 caret-pink-500 text-black">
    <div class="flex flex-col gap-1">
      <p>Full Name</p>
      <input
        type="text"
        placeholder="Your Name"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p>Email</p>
      <input
        type="text"
        placeholder="abc@company.com"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p>Phone</p>
      <input
        required
        type="tel"
        placeholder="+91 12345 67890"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p class="font-bold">How can we help you!</p>
      <textarea
        type="text"
        placeholder="Leave us a Message..."
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
  </div>

  <button
    class="bg-[#242124] text-white rounded-lg h-12 w-1/2 hover:text-pink-600 hover:bg-white font-bold"
    >Send Message</button
  >
</div>
