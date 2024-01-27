<script>
  import { myContactForm } from "../../Firebase.js";
  import { writable } from "svelte/store";
  import { addDoc } from "firebase/firestore";

  const formData = writable({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  console.log("ayush", myContactForm);

  const handleSubmit = async () => {
    console.log("Submit button is getting clicked");

    const data = $formData; // Get the current value of the form data store

    console.log(data);

    try {
      // Add the form data to Firestore collection
      const docRef = await addDoc(myContactForm, { data });
      console.log("Document written with ID: ", docRef.id);

      // Optionally, reset the form after successful submission
      formData.set({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding form data to Firestore:", error);
    }
  };
</script>

<div class="p-10 w-1/2 flex flex-col gap-8 bg-pink-300">
  <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
    The
    <span
      class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
    >
      <span class="relative text-white">Complete</span>
    </span>
    Health Solution
  </blockquote>

  <form
    on:submit|preventDefault={handleSubmit}
    class="flex flex-col gap-4 caret-pink-500 text-black"
  >
    <div class="flex flex-col gap-1">
      <p>Full Name</p>
      <input
        type="text"
        bind:value={$formData.fullName}
        placeholder="Your Name"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p>Email</p>
      <input
        type="text"
        bind:value={$formData.email}
        placeholder="abc@company.com"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p>Phone</p>
      <input
        required
        type="tel"
        bind:value={$formData.phone}
        placeholder="+91 12345 67890"
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p class="font-bold">How can we help you!</p>
      <textarea
        type="text"
        bind:value={$formData.message}
        placeholder="Leave us a Message..."
        class="rounded-lg p-2 w-9/12 text-black placeholder:text-sm outline-none"
      />
    </div>
    <button
      class="bg-[#242124] text-white rounded-lg h-12 w-1/2 hover:text-pink-600 hover:bg-white font-bold"
      type="submit">Send Message</button
    >
  </form>
</div>
