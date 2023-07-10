<div id="container">
	<div id="calendar__year__displayer">
		<CalendarYearMonthsDisplayer year="{$currentYearStore}"/>
	</div>
</div>

<script>
	import CalendarYearMonthsDisplayer from "$lib/pages/calendar/components/year/CalendarYearMonthsDisplayer.svelte";
	import {currentYearStore} from "$source/routes/calendar_new/stores.js";

	// let currentYear;
	// $: currentYearRef = currentYear;
	// currentYearStore.subscribe((value) => {
	// 	currentYear = value;
	// });
</script>

<style lang="scss">
	#container {
		padding: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 100%;
	}

	#calendar__year__displayer {
		width: 100%;
		text-align: center;

		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

		row-gap: 10px;
		column-gap: 10px;
	}
</style>