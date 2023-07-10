<section id="calendar">
	{#if (Object.keys(data).length > 0)}
		<CalendarYearSelector/>
		<CalendarYearDisplayer/>
	{:else}
		<h1>No data today!</h1>
	{/if}
</section>

<script lang="js">
	import CalendarYearSelector from "$lib/pages/calendar/components/year/CalendarYearSelector.svelte";
	import CalendarYearDisplayer from "$lib/pages/calendar/components/year/CalendarYearDisplayer.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<style lang="scss">
	#calendar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		min-height: 400px;
	}
</style>