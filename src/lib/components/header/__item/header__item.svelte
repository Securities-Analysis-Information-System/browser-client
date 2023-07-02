<li><a href="{href}">{name}</a></li>

<script lang="js">
    /** @type {string} */
    export let href;
    /** @type {string} */
    export let name;
</script>

<style lang="scss">
  @import "$globalStyles/color";

  li {
    border: 1px solid black;
    //border-radius: 10px;
    background-color: $color_first_level;

    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  a {
    text-decoration: none;
    color: $color_text;
  }
</style>