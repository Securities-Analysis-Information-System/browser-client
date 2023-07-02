<!--<ul class="header__logo">-->
<li class="header__logo">
    <a href="{href}">ИСАЦБ-АНЗ{moduleName === null ? '' : ' | ' + moduleName}</a>
</li>
<!--</ul>-->

<script lang="js">
    /** @type {string} */
    export let href;
    /** @type {string|null} */
    export let moduleName;
</script>

<style lang="scss">
  @import '$globalStyles/color';

  .header__logo {
    padding: 0.2rem 0.5rem 0 0.5rem;
    font-size: 1.5rem;
    background-color: $color_first_level;
  }

  .header__logo a {
    text-decoration: none;
    color: $color_text;
  }
</style>