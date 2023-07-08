<div class="calendar__day" id="calendar__day--{year}-{getCorrectMonth(month)}-{getCorrectDay(day)}">
	<!--{year}-{getCorrectMonth(month)}-{getCorrectDay(day)}-->
	{getCorrectDay(day)}
</div>

<script lang="js">
	/** @type {number} */
	export let day;
	/** @type {number} */
	export let month;
	/** @type {number} */
	export let year;

	function getCorrectDay(day) {
		return day < 10 ? `0${day}` : day;
	}

	function getCorrectMonth(monthNumber) {
		monthNumber = monthNumber + 1;
		return monthNumber < 10 ? `0${monthNumber}` : monthNumber;
	}
</script>