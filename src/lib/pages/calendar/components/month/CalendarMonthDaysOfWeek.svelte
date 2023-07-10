{#each daysOfWeek as dayOfWeek}
	<div>{dayOfWeek}</div>
{/each}

<script lang="js">
	let daysOfWeek = ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'];
</script>

<style lang="scss">
	div {
		font-weight: 400;
	}
</style>