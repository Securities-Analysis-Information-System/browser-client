import {expect, test} from '@playwright/test';

test('calendar page display 12 months', async ({page}) => {
    await page.goto('/calendar_new');
    let calendarMonthLocatorCollection = await page.locator("div.calendar__month");

    await expect(calendarMonthLocatorCollection).toHaveCount(12);

    for (const month of await calendarMonthLocatorCollection.all()) {
        await expect(month).toBeVisible();
    }
});
