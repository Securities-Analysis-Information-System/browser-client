<nav class="header">
	<HeaderMenuAction>
		<HeaderLogo href={"/"} moduleName={"Облигации"}/>
		<HeaderItem href={"/login"} name={"Портфель"}/>
		<HeaderItem href={"/check"} name={"Каталог"}/>
		<HeaderItem href={"/calendar_new"} name={"Календарь"}/>
	</HeaderMenuAction>

	<HeaderMenuProfile>
		<HeaderItem href={"/login"} name={"Вход"}/>
		<HeaderItem href={"/login"} name={"Регистрация"}/>
	</HeaderMenuProfile>
</nav>

<script lang="ts">
	import HeaderMenuAction from "$lib/components/header/__menu-action/header__menu-action.svelte";
	import HeaderMenuProfile from "$lib/components/header/__menu-profile/header__menu-profile.svelte";
	import HeaderLogo from "$lib/components/header/__logo/header__logo.svelte";
	import HeaderItem from "$lib/components/header/__item/header__item.svelte";
</script>

<style lang="scss">
	@import "$globalStyles/color";

	.header {
		background-color: $color_second_level;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		padding: 1rem;
	}
</style>


<!--	<ul class="menu__logo">-->
<!--		-->
<!--	</ul>-->
<!--<ul class="menu__main">-->
<!--	<li class="logo"><a href="/static">ИСАЦБ-АНЗ | Облигации</a></li>-->
<!--	&lt;!&ndash;		<li class="logo"><a href="/">SAIS-1 | ASH</a></li>&ndash;&gt;-->
<!--	<MenuItem href={"/login"} name={"Портфель"}/>-->
<!--	<MenuItem href={"/login"} name={"Каталог"}/>-->
<!--	<MenuItem href={"/login"} name={"Календарь"}/>-->
<!--</ul>-->
<!--&lt;!&ndash;	<ul>&ndash;&gt;-->
<!--&lt;!&ndash;		<li class="logo" style="justify-self: center">Аналитика начинается здесь</li>&ndash;&gt;-->
<!--&lt;!&ndash;	</ul>&ndash;&gt;-->
<!--<ul class="menu__profile">-->
<!--	<MenuItem href={"/login"} name={"Вход"}/>-->
<!--	<MenuItem href={"/login"} name={"Регистрация"}/>-->
<!--</ul>-->