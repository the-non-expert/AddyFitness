<script>
  import { page } from "$app/stores";
  import icon from "$lib/images/addyFitnessIcon.png";
  import logo from "$lib/images/addyFitnessLogo.png";
  import caption from "$lib/images/addyFitnessCaption.png";
  import login from "$lib/images/loginIcon.svg";

  $: activeRoute = $page.url.pathname;

  $: isLoggedIn = true;

  /**
   * @param {string} route
   */
  function isActive(route) {
    return activeRoute === route;
  }

  let navOptions = [
    { id: 1, name: "Home", redirectUrl: "/" },
    { id: 2, name: "Training", redirectUrl: "/training" },
    { id: 4, name: "Nutrition", redirectUrl: "/nutrition" },
    { id: 5, name: "Healthcare", redirectUrl: "/healthcare" },
    { id: 6, name: "Management", redirectUrl: "/management" },
    { id: 7, name: "Contact", redirectUrl: "/contact" },
    { id: 8, name: "About", redirectUrl: "/about" },
    {
      id: 9,
      name: isLoggedIn ? "Your Profile" : "Log In",
      redirectUrl: isLoggedIn ? "/yourProfile" : "/login",
    },
  ];
</script>

<div class="flex gap-2 items-center justify-center mt-5">
  <img src={icon} alt="Icon" class="flex h-36" />
  <div class="flex flex-col gap-2 justify-center items-center">
    <img src={logo} alt="Icon" class="max-w-screen-sm" />
    <img src={caption} alt="CaptionIcon" class="w-96" />
  </div>
</div>

<header class="flex justify-center mt-4">
  <!-- <div class="w-32"></div> -->

  <div class="text-white">
    <ul class="flex p-1 gap-2">
      {#each navOptions as item (item.id)}
        <!-- svelte-ignore missing-declaration -->
        <a href={item.redirectUrl}>
          <li
            class={`${
              isActive(item.redirectUrl)
                ? "bg-white text-pink-500"
                : "hover:bg-white hover:text-pink-500"
            } pl-6 pr-6 rounded-3xl font-['Raleway'] text-xl font-semibold`}
          >
            {item.name}
          </li>
        </a>
      {/each}
    </ul>
  </div>

  <!-- <div class="flex pr-4 items-center gap-2 cursor-pointer">
    <img src={login} alt="Login" class="w-6" />
    <p class="text-white font-['Montserrat']">Login</p>
  </div> -->
</header>
