<section id="calendar">
	<CalendarYearSelector/>
	<CalendarYearDisplayer/>
</section>

<script lang="js">
	import CalendarYearSelector from "$lib/pages/calendar/components/year/CalendarYearSelector.svelte";
	import CalendarYearDisplayer from "$lib/pages/calendar/components/year/CalendarYearDisplayer.svelte";
</script>

<style lang="scss">
	#calendar {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>