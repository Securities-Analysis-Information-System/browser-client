<div class="calendar__month__days">
	<CalendarMonthDaysOfWeek/>
	<CalendarMonthDaysSkip skipCount="{skip}"/>

	{#each daysInMonth.values() as day}
		<CalendarDay day="{day.getDate()}" month="{day.getMonth()}" year="{day.getFullYear()}"/>
	{/each}
</div>

<script lang="js">
	import CalendarDay from "$lib/pages/calendar/components/day/CalendarDay.svelte";
	import CalendarMonthDaysOfWeek from "$lib/pages/calendar/components/month/CalendarMonthDaysOfWeek.svelte";
	import CalendarMonthDaysSkip from "$lib/pages/calendar/components/month/CalendarMonthDaysSkip.svelte";
	import {afterUpdate} from "svelte";

	export let month;
	export let year;
	let skip = getSkipDaysByMonthAndYear(month, year);
	let daysInMonth = getDaysInMonthByMonthAndYear(month, year);

	afterUpdate(() => {
		skip = getSkipDaysByMonthAndYear(month, year);
		daysInMonth = getDaysInMonthByMonthAndYear(month, year);
	})

	function getSkipDaysByMonthAndYear(monthNumber, year) {
		let skip = {
			'понедельник': 0,
			'вторник': 1,
			'среда': 2,
			'четверг': 3,
			'пятница': 4,
			'суббота': 5,
			'воскресенье': 6
		};

		let firstDayOfMonth = new Date()
		firstDayOfMonth.setFullYear(year);
		firstDayOfMonth.setMonth(monthNumber);
		firstDayOfMonth.setDate(1);
		let dayOfWeek = firstDayOfMonth.toLocaleDateString('ru', {weekday: 'long'});

		return skip[dayOfWeek];
	}

	function getDaysInMonthByMonthAndYear(monthNumber, year) {
		let firstDayOfMonth = new Date();
		firstDayOfMonth.setFullYear(year);
		firstDayOfMonth.setMonth(monthNumber);
		firstDayOfMonth.setDate(1);

		let days = [firstDayOfMonth];
		let nextDay = new Date()
		nextDay.setFullYear(year)
		nextDay.setMonth(monthNumber);
		nextDay.setDate(firstDayOfMonth.getDate() + 1)
		while ((nextDay.getFullYear() === firstDayOfMonth.getFullYear()) && (nextDay.getMonth() === firstDayOfMonth.getMonth())) {
			days.push(nextDay)

			let futureNextDay = new Date();
			futureNextDay.setFullYear(nextDay.getFullYear());
			futureNextDay.setMonth(nextDay.getMonth());
			futureNextDay.setDate(nextDay.getDate() + 1);
			nextDay = futureNextDay
		}

		return days;
	}
</script>

<style lang="scss">
	.calendar__month__days {
		height: 300px;
		width: 100%;

		padding: 5px;

		//background-color: aquamarine;
		border: 1px solid #999999;

		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(7, 1fr);
		grid-column-gap: 5px;
		grid-row-gap: 5px;
	}
</style>