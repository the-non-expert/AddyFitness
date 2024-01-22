<script>
  import Header from "./Header.svelte";
  //   import "./styles.css";
  import "../tailwind.css";
  import bgVideo from "$lib/images/addyBackground.mp4";
  import Footer from "./footer.svelte";
</script>

<div class="bgContainer flex flex-col h-full bg-black">
  <!-- <video autoplay loop muted class="video-bg">
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video> -->
  <!-- <div class="bgContainer bg-black absolute h-auto w-full text-white" /> -->

  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <Footer />
  </footer>
</div>

<style>
  /* .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  } */

  .video-bg {
    position: fixed;
    bottom: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    /* opacity: 0.3; */
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    max-width: 80rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  .bgContainer {
    z-index: -100;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
