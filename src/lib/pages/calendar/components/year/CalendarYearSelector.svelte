<div id="calendar__year__selector">
	<YearDecreaser/>
	<time datetime="{$currentYearStore}">{$currentYearStore}</time>
	<YearIncreaser/>
</div>

<script>
	import {currentYearStore} from "$source/routes/calendar_new/stores.js";
	import YearDecreaser from "$lib/pages/calendar/components/year/YearDecreaser.svelte";
	import YearIncreaser from "$lib/pages/calendar/components/year/YearIncreaser.svelte";
</script>

<style lang="scss">
	#calendar__year__selector {
		display: flex;
		flex-direction: row;
		justify-content: center;

		font-size: 1.5em;
	}

	time {
		margin-left: 10px;
		margin-right: 10px;
	}
</style>