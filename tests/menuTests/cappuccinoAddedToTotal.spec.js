import { test } from '../fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/getPriseForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
    menuPage,
}) => {
    await menuPage.open();
    await menuPage.clickCappucinoCup();

    await menuPage.assertTotalCheckoutContainsValue(
        totalPriceFormatStr('Cappucino'),
    );
});
