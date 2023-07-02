<div class="calendar__year">
    {#each months as monthDays, monthNumber}
        <div class="calendar__month">
            <div class="calendar__month__days">
                {#each Array.from(Array(monthDays)) as key, day}
                    <div class="calendar__month__day">{day + 1}</div>
                {/each}
            </div>
            <div class="calendar__month__additional-information">
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  .calendar__year {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 350px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .calendar__month {
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #999999;
  }

  .calendar__month__days {
    height: 250px;
    width: 100%;

    padding: 5px;

    //background-color: aquamarine;
    border: 1px solid #999999;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }

  .calendar__month__additional-information {
    width: 100%;
    height: 60px;

    border: 1px solid #999999;
  }

  .calendar__month__day {
    width: 100%;
    height: 100%;

    border-radius: 100%;

    background-color: #999;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<!--{#each months as month}-->
<!--    <p>{formatter.format(month)}</p>-->
<!--{/each}-->

<script lang="js">
    // formatter.format для вывода месяца в виде слов
    const formatter = new Intl.DateTimeFormat('ru', {month: 'long'});
    let currentYear = 2023;
    let beginOfYear = new Date();
    beginOfYear.setMonth(0, 1);
    // для установки года
    // beginOfYear.setFullYear(2024);

    /** @type {number[]} */
    let months = [];
    for (let i = 0; i < 12; i++) {
        let currentMonthWithLastDay = new Date(
            beginOfYear.getFullYear(),
            beginOfYear.getMonth() + i + 1,
            0
        );

        months.push(
            currentMonthWithLastDay.getDate()
        );
    }
</script>