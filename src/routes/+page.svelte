<section>
  <article>
    <h1>Аналитика начинается здесь</h1>
    <!--		<h1>Analytics starts here</h1>-->
    <!--	<h1>Welcome to SvelteKit</h1>-->
    <!--	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>-->
    <!--	<a href="/login">To Login.</a>-->
  </article>

  <!--	<article>-->
  <!--		<button on:click={load()}></button>-->
  <!--	</article>-->
</section>

<script lang="ts">
</script>

<style lang="scss">
  @import "$globalStyles/color";

  section {
    display: flex;
    justify-content: center;
  }

  section article {
    margin-top: 2rem;
    padding: 0.2rem 0.5rem 0 0.5rem;
    font-size: 1.5rem;
    background-color: $color_second_level;

    width: 100%;
    text-align: center;

    //border: 1px solid black;
  }

  section * {
    font-weight: normal;
  }
</style>