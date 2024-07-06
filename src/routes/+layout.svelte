<script>
  import Header from "./Header.svelte";
  import { page } from "$app/stores";
  //   import "./styles.css";
  import "../tailwind.css";
  import bgVideo from "$lib/images/addyBackground.mp4";
  import Footer from "./footer.svelte";
  import NewFooter from "../lib/homePageComponents/newFooter.svelte";

  $: activeRoute = $page.url.pathname;

  console.log(activeRoute);

  const noFooterRoutes = ["/login"];
  $: showFooter = !noFooterRoutes.includes($page.path);

  console.log(showFooter);
</script>

<div class="bgContainer flex flex-col h-full">
  <!-- <video autoplay loop muted class="video-bg">
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video> -->
  <div class="bg-black websiteBg" />

  <Header />

  <main>
    <slot />
  </main>

  {#if showFooter}
    <footer>
      <NewFooter />
    </footer>
  {/if}
</div>

<style>
  .bgContainer {
    z-index: -10;
  }

  .websiteBg {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
  }

  @media (min-width: 999px) {
    footer {
      /* width: 90%; */
    }
  }
</style>
