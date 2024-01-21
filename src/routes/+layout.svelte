<script>
  import Header from "./Header.svelte";
  //   import "./styles.css";
  import "../tailwind.css";
  import bgVideo from "$lib/images/addyBackground.mp4";
</script>

<div class="flex flex-col h-11/12">
  <video autoplay loop muted class="video-bg">
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
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

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
