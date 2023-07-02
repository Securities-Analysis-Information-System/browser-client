<div class="year">
    <h1 class="year__arrow" id="year__arrow--previous">&larr;</h1>
    <h1>&nbsp;</h1>
    <h1>{refCurrentYear}</h1>
    <h1>&nbsp;</h1>
    <h1 class="year__arrow" id="year__arrow--next">&rarr;</h1>
</div>
<hr/>
<div class="calendar__year">
    {#each monthsInCurrentYear as monthDays, monthNumber}
        <div class="calendar__month">
            <div class="calendar__month__days">
                {#each ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as dayOfWeek}
                    <span>{dayOfWeek}</span>
                {/each}
                {#each getMonthDaysArray(monthDays) as day}
                    {#each Array.from(Array(getSkipCount(getDate(refCurrentYear, monthNumber, day))).keys()) as skip}
                        <div></div>
                    {/each}
                    {#if getBondDataByYearMonthDay(refCurrentYear, monthNumber, day, data)}
                        <div>
                            <div class="calendar__month__day calendar__month__day-have_bonds"
                                 data-date="{getDate(refCurrentYear, monthNumber, day).get()}">{day + 1}
                            </div>
                            <div class="calendar__month__day__coupon__window"
                                 id="calendar__month__day__coupon__window__{getDate(refCurrentYear, monthNumber, day).get()}">
                                <div style="display: flex; flex-direction: row; justify-content: flex-end">
                                    <button
                                            id="calendar__month__day__coupon__window__button__{getDate(refCurrentYear, monthNumber, day).get()}--close">
                                        Close
                                    </button>
                                </div>
                                {#each getBondDataByYearMonthDay(refCurrentYear, monthNumber, day, data) as couponInformation}
                                    <p>
                                        <span>{couponInformation.isin}</span>
                                        <span>:</span>
                                        <span>{couponInformation.name}</span>
                                        <span> - </span>
                                        <span>{couponInformation.total}</span>
                                    </p>
                                    <hr/>
                                {/each}
                            </div>
                        </div>
                    {:else}
                        <div class="calendar__month__day"
                             data-date="{getDate(refCurrentYear, monthNumber, day).get()}">{day + 1}
                        </div>
                    {/if}
                {/each}
            </div>
            <div class="calendar__month__additional-information">
                {#if getTotalDataByYearMonth(refCurrentYear, monthNumber + 1, data)}
                    <p>Total: {getTotalDataByYearMonth(refCurrentYear, monthNumber + 1, data).total}</p>
                {/if}
            </div>
        </div>
    {/each}
</div>

<script lang="js">
    /** Imports */
    // Returns promise which resolves when all pending state changes apply or no pending state changes.
    import {onMount, tick} from 'svelte';
    import {
        getBondDataByDate,
        getBondDataByYearMonthDay,
        getDate, getTotalDataByYearMonth,
        initializeBeginOfYear,
        months
    } from "./service.js";
    import {StandardDate} from "./types.js";

    /** Exports */
    /** @type {import('./$types').PageData} */
    export let data;

    /** Initialize variables */
    let currentYear = (new Date()).getFullYear();
    let beginOfCurrentYearDate = initializeBeginOfYear(currentYear);
    let monthsInCurrentYear = months(beginOfCurrentYearDate);
    let isFirstWeek = false;

    /** Initialize reactive code */
    $: refCurrentYear = currentYear;
    $: if (currentYear) {
        (async () => {
            await tick()

            let dayHtmlElementCollection = document.getElementsByClassName('calendar__month__day');
            Array.from(dayHtmlElementCollection).forEach((dayElement) => {
                if (getBondDataByDate(new StandardDate(...dayElement.dataset.date.split('-')), data)) {
                    dayElement.addEventListener('click', (ev) => {
                        /** @type HTMLElement */
                        const element = ev.target;

                        /** @type {string} */
                        let date = element.dataset.date;
                        /** @type {HTMLElement} */
                        let couponWindow = document.getElementById('calendar__month__day__coupon__window__' + date);

                        if ((window.screen.width - (ev.pageX + 400)) < 0) {
                            couponWindow.classList.add("calendar__month__day__coupon__window--left_side");
                            couponWindow.style.transform = 'translate3d(-400px, -35px, 0px)';
                        }

                        if ((window.screen.height - (ev.pageY + 400)) < 0) {
                            couponWindow.classList.add("calendar__month__day__coupon__window--left_side");
                            couponWindow.style.transform = 'translate3d(40px, -300px, 0px)';
                        }

                        if (couponWindow.style.display === '' || couponWindow.style.display === 'none') {
                            couponWindow.style.display = 'block';
                        } else {
                            couponWindow.style.display = 'none';
                        }
                    })

                    document
                        .getElementById('calendar__month__day__coupon__window__button__' + dayElement.dataset.date + '--close')
                        ?.addEventListener('click', () => {
                            /** @type {string} */
                            let date = dayElement.dataset.date;
                            /** @type {HTMLElement} */
                            let couponWindow = document.getElementById('calendar__month__day__coupon__window__' + date);
                            couponWindow.style.display = 'none';
                        });
                }
            });
        })()
    }

    /** Code after page load */
    onMount(() => {
        document.getElementById('year__arrow--previous')?.addEventListener('click', () => {
            currentYear = currentYear - 1;
        })
        document.getElementById('year__arrow--next')?.addEventListener('click', () => {
            currentYear = currentYear + 1;
        })
    });

    /** Help functions. */
    /**
     * @param {number[]} monthDays
     * @return {number[]}
     */
    function getMonthDaysArray(monthDays) {
        isFirstWeek = true;
        return [...Array.from(Array(monthDays)).keys()]
    }

    /**
     * @param {StandardDate} date
     * @param {boolean} isTest
     * @return {number}
     */
    function getSkipCount(date, isTest = false) {
        if (isFirstWeek === false) {
            return 0;
        }

        let skip = {
            'понедельник': 0,
            'вторник': 1,
            'среда': 2,
            'четверг': 3,
            'пятница': 4,
            'суббота': 5,
            'воскресенье': 6
        };

        let dateObject = new Date(date.get())
        let dayOfWeekName = dateObject.toLocaleDateString('ru', {weekday: 'long'});

        if (!isTest) {
            isFirstWeek = false;
        }

        return skip[dayOfWeekName];
    }
</script>

<style lang="scss">
  @use "sass:math";

  .year {
    display: flex;
    flex-direction: row;
    justify-content: center
  }

  .year__arrow {
    position: relative;
    bottom: 4px;
    cursor: pointer;
  }

  .calendar__year {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 350px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  .calendar__month {
    width: 100%;
    height: 100%;
    padding: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #999999;
  }

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

  .calendar__month__additional-information {
    width: 100%;
    height: 60px;

    border: 1px solid #999999;
  }

  .calendar__month__day {
    width: 100%;
    height: 100%;

    font-family: "JetBrains Mono", monospace;
    font-size: 1rem;

    border-radius: 100%;

    background-color: #999;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar__month__day-have_bonds {
    background-color: #008000;
    cursor: pointer;
  }

  .calendar__month__day__coupon__window {
    display: none;
    position: absolute;
    transform: translate3d(40px, -35px, 0px);
    z-index: 1;

    background-color: rgba(200, 200, 200, 1);
    border: 1px solid #999999;

    width: 400px;
    height: 300px;
  }
</style>

<!-- Maybe will help -->
<!--// для установки года-->
<!--// beginOfYear.setFullYear(2024);-->
<!--// Can push events-->
<!--// import {createEventDispatcher} from 'svelte';-->
<!--// const dispatcher = createEventDispatcher();-->
<!--// formatter.format для вывода месяца в виде слов-->
<!--// const formatter = new Intl.DateTimeFormat('ru', {month: 'long'});-->