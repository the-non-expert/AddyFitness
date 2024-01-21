<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/4.png";
  import icon from "$lib/images/5.png";
  import login from "$lib/images/loginIcon.svg";

  $: activeRoute = $page.url.pathname;

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
  ];
</script>

<div class="flex justify-center mt-4 mb-2 gap-4">
  <img src={icon} alt="icon" class="w-24" />
  <img src={logo} alt="logo" class="w-96" />
</div>

<header class="flex justify-between mt-4">
  <div class="w-32"></div>

  <div class="text-white">
    <ul class="flex p-1 gap-2">
      {#each navOptions as item (item.id)}
        <!-- svelte-ignore missing-declaration -->
        <a href={item.redirectUrl} use:link>
          <li
            class={`${
              isActive(item.redirectUrl)
                ? "bg-white text-red-500"
                : "hover:bg-white hover:text-red-500"
            } pl-6 pr-6 rounded-3xl font-['Raleway'] text-xl font-semibold`}
          >
            {item.name}
          </li>
        </a>
      {/each}
    </ul>
  </div>

  <div class="flex pr-4 items-center gap-2 cursor-pointer">
    <img src={login} alt="Login" class="w-6" />
    <p class="text-white font-['Montserrat']">Login</p>
  </div>
</header>
