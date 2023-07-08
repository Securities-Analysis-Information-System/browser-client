import {StandardDate} from "./types.js";

/**
 * @param {number} year
 * @return {Date}
 */
export function initializeBeginOfYear(year) {
    let date = new Date();
    date.setFullYear(year)
    date.setMonth(0, 1);

    return date;
}

/**
 * @param {StandardDate} date
 * @param {import('./$types').PageData} pageData
 * @return {Object}
 */
export function getBondDataByDate(date, pageData) {
    return pageData.bond_by_date[date.get()];
}

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {import('./$types').PageData} pageData
 * @return {Object}
 */
export function getBondDataByYearMonthDay(year, month, day, pageData) {
    /** @type {StandardDate} */
    const date = getDate(year, month, day);
    return getBondDataByDate(date, pageData);
}

/**
 * @param {number} year
 * @param {number} month
 * @param {import('./$types').PageData} pageData
 */
export function getTotalDataByYearMonth(year, month, pageData) {
    let date = new StandardDate(year, month, 1);
    let correctDate = date.get();
    let correctDateParts = correctDate.split('-');
    let [yearFromDate, monthFromDate] = [correctDateParts[0], correctDateParts[1]];
    return pageData.total_by_month[`${yearFromDate}-${monthFromDate}`];
}

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return {StandardDate}
 */
export function getDate(year, month, day) {
    return new StandardDate(year, month + 1, day + 1);
}

/**
 * @param {Date} beginOfTargetYear
 * @return {number[]}
 */
export function months(beginOfTargetYear) {
    /** @type {number[]} */
    const months = [];

    for (let i = 0; i < 12; i++) {
        const currentMonthWithLastDay = new Date(
            beginOfTargetYear.getFullYear(),
            beginOfTargetYear.getMonth() + i + 1,
            0
        );

        months.push(
            currentMonthWithLastDay.getDate()
        );
    }

    return months;
}