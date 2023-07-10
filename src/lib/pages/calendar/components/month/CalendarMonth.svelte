<div class="calendar__month">
	<span class="calendar__month__name">{monthName}</span>
	<CalendarMonthDays year="{year}" month="{monthNumber}"/>
</div>

<script lang="js">
	import CalendarMonthDays from "$lib/pages/calendar/components/month/CalendarMonthDays.svelte";
	import {afterUpdate} from "svelte";

	/** @type {number} */
	export let monthNumber;
	export let year;

	let dateInMonth = new Date();
	let monthName;

	afterUpdate(() => {
		dateInMonth.setFullYear(year)
		dateInMonth.setMonth(monthNumber)
		dateInMonth.setDate(1)

		monthName = dateInMonth.toLocaleDateString('ru', {month: 'long'});
		monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
		console.log(year);
	})
</script>

<style lang="scss">
	.calendar__month {
		width: 100%;
		height: 100%;
		padding: 5px;

		display: flex;
		flex-direction: column;
		justify-content: start;

		border: 1px solid #999999;
	}

	.calendar__month__name {
		font-weight: 600;
	}
</style>