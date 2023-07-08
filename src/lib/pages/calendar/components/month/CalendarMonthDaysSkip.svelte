{#each Array(skipCount).keys() as skipNumber}
	<div id="calendar__month__days__skip-{skipNumber}"></div>
{/each}

<script lang="js">
	export let skipCount;
</script>