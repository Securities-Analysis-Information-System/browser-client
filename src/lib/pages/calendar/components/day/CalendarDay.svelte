<div class="calendar__day" id="calendar__day--{year}-{getCorrectMonth(month)}-{getCorrectDay(day)}">
	<!--{year}-{getCorrectMonth(month)}-{getCorrectDay(day)}-->
	<span>{getCorrectDay(day)}</span>
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

<style lang="scss">
	.calendar__day {
		border-radius: 20px;
		border-left: 2px solid #666;
		border-right: 2px solid #666;

		background-color: rgba(255, 255, 255, 1);
		//background-color: rgba(0, 150, 0, 0.3); -- green
	}

	.calendar__day span {
		background-color: rgba(0, 0, 0, 0);
	}
</style>