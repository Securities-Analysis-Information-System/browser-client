<button id="calendar__year__selector--previous"
				on:click={decreaseYear}
>
	&larr;
</button>

<script>
	import {currentYearStore} from "$source/routes/calendar_new/stores.js";
	import {get} from "svelte/store";

	function decreaseYear() {
		currentYearStore.set(get(currentYearStore) - 1);
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