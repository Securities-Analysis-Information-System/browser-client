<button id="calendar__year__selector--next"
				on:click={increaseYear}
>
	&rarr;
</button>

<script>
	import {currentYearStore} from "$source/routes/calendar_new/stores.js";
	import {get} from "svelte/store";

	function increaseYear() {
		currentYearStore.set(get(currentYearStore) + 1);
	}
</script>

<style lang="scss">
	button {
		all: unset;
		position: relative;
		bottom: 3px;
		cursor: pointer;
	}
</style>