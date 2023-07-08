{#each months as monthNumber}
	<CalendarMonth year="{year}" monthNumber="{monthNumber}"/>
{/each}

<script lang="js">
	import CalendarMonth from "$lib/pages/calendar/components/month/CalendarMonth.svelte";

	let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	export let year;
</script>