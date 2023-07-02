export class StandardDate {
    /**
     * @param {number} year
     * @param {number} month
     * @param {number} day
     * @constructor
     */
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    /**
     * @return string
     */
    get() {
        return [
            this.year,
            this.month.toString().length > 1
                ? this.month
                : '0' + this.month.toString(),
            this.day.toString().length > 1
                ? this.day
                : '0' + (this.day)
        ].join('-')
    }
}